import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart/cart.service";
import {ICartModel} from "../../../models/i-cart-model";
import {APIPath} from "../../../constance/api-path";

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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listenService();
  }
  listenService(): void{
    this.cartService.getListCartDetail()
      .subscribe(res => {
        this.listCart = res;
        this.sumTotal();
        console.log(res);
      })

  }
  sumTotal() : void{
    this.listCart.map(res => {
      if(res.productDTO?.price && res?.quantity){
        const sum = res.productDTO?.price * res?.quantity;
        console.log(sum);
        this.total += sum;
      }
    })
    console.log(this.total)
  }
  removeItemCart(item: ICartModel): void{
    if(item.id){
      this.cartService.deleteCartDetail(parseInt(item.id)).subscribe(
        res => {
          this.listenService();
        }
      );
    }

  }
}
