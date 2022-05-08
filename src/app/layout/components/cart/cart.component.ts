import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart/cart.service";
import {ICartModel} from "../../../models/i-cart-model";
import {APIPath} from "../../../constance/api-path";
import {OrderService} from "../../../services/order/order.service";
import {NotifyService} from "../../../services/notify/notify.service";
import {IOrderModel} from "../../../models/i-order-model";
import {IOrderDetailDTO} from "../../../models/i-order-detail-DTO";
import {IProductModel} from "../../../models/i-product-model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listCart: ICartModel[] = [];
  url = APIPath.image.url;
  total = 0;
  address = '';

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private notifyService: NotifyService) {
  }

  ngOnInit(): void {
    this.listenService();
  }

  listenService(): void {
    this.cartService.getListCartDetail()
      .subscribe(res => {
        this.listCart = res;
        this.sumTotal();
        console.log(res);
      })

  }

  sumTotal(): void {
    this.listCart.map(res => {
      if (res.productDTO?.price && res?.quantity) {
        const sum = res.productDTO?.price * res?.quantity;
        console.log(sum);
        this.total += sum;
      }
    })
    console.log(this.total)
  }

  removeItemCart(item: ICartModel): void {
    if (item.id) {
      this.cartService.deleteCartDetail(parseInt(item.id)).subscribe(
        res => {
          this.listenService();
        }
      );
    }
  }

  removeAll(): void {
    this.listCart.map(res => {
      if (res.id) {
        this.cartService.deleteCartDetail(parseInt(res.id))
          .subscribe(res => {
              console.log(res)
              this.listenService();
            },
            error => {
              console.log(error);
            });
      }
    })
  }

  submitOrder(): void {
    const order = new IOrderModel();
    this.createOrder(order);
  }

  createOrder(iOrderModel: IOrderModel): void {
    iOrderModel.total = this.total;
    iOrderModel.address = this.address;
    iOrderModel.status = 'order placed';
    const orderDetail = new IOrderDetailDTO();
    const listOrderDetail: IOrderDetailDTO[] = [];
    this.listCart.map(res => {
      const product = new IProductModel();
      product.id = res.productDTO?.id;
      orderDetail.product = product;
      orderDetail.quantity = res.quantity;
      listOrderDetail.push(orderDetail);
    })
    iOrderModel.orderDetails = listOrderDetail;
    this.orderService.newCartDetail(iOrderModel)
      .subscribe(res => {
          this.notifyService.success('Đặt hàng thành công');
          this.removeAll();
        },
        error => {
          this.notifyService.error('Đặt hàng thất bại vui long thử lại');
        })
  }
}
