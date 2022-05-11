import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product/product.service";
import {APIPath} from "../../../constance/api-path";
import {CartService} from "../../../services/cart/cart.service";
import {ICartModel} from "../../../models/i-cart-model";
import {IProductModel} from "../../../models/i-product-model";
import {NotifyService} from "../../../services/notify/notify.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = '';
  productItem: any;
  listProduct: IProductModel[] = [];
  url = APIPath.image.url;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService,
              private notifyService: NotifyService) {
  }

  ngOnInit(): void {
    this.getIdFormParams();
    this.listenState();
  }

  getIdFormParams(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log(this.productId);
    });
  }

  listenState(): void {
    if (this.productId) {
      this.productService.getProduct(parseInt(this.productId))
        .subscribe(res => {
          this.productItem = res;
          console.log(this.productItem);
        })
    }
    this.productService.getProducts()
      .subscribe(res => {
        this.listProduct = res;
      })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left text-black"></i>', '<i class="fas fa-chevron-right text-black"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2.5
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
    },
    nav: true
  }
  quantity = 1;

  addCart(): void {
    const cart = new ICartModel();
    this.createCartDetal(cart);
  }

  createCartDetal(cart: ICartModel): void {
    const product = new IProductModel();
    if (this.productId) {
      product.id = parseInt(this.productId);
    }
    cart.product = product;
    cart.quantity = this.quantity;
    this.cartService.newCartDetail(cart)
      .subscribe(res => {
          console.log(res);
          this.notifyService.success('Thêm vào giở hàng thành công');
        },
        error => {
          console.log(error);
          window.location.href = 'auth/login';
          this.notifyService.error('Thêm vào giỏ hàng thất bại');
        })
  }
}
