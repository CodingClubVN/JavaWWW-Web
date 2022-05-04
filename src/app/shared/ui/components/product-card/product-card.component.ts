import {Component, Input, OnInit} from '@angular/core';
import {IProductModel} from "../../../../models/i-product-model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('productCard') productChildren: IProductModel | undefined;
  imageStatus = false;

  constructor() {
  }

  ngOnInit(): void {
    if(this.productChildren){
      console.log(this.productChildren);
    }
  }
}
