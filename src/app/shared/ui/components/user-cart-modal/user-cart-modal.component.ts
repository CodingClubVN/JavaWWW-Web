import { Component, OnInit } from '@angular/core';
import { ICartModel } from 'src/app/models/i-cart-model';
import {CartService} from "../../../../services/cart/cart.service";
import {APIPath} from "../../../../constance/api-path";

@Component({
  selector: 'app-user-cart-modal',
  templateUrl: './user-cart-modal.component.html',
  styleUrls: ['./user-cart-modal.component.scss']
})
export class UserCartModalComponent implements OnInit {
  listUserCartItems: ICartModel[] = [];
  url = APIPath.image.url;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listenService();
    console.log('oke');
  }

  listenService(): void{
    this.cartService.getListCartDetail()
      .subscribe(res => {
        console.log(res);
        this.listUserCartItems = res;
      },
        error => {
        console.log(error);
        })
  }

}
