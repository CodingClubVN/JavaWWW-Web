import {Component, Input, OnInit} from '@angular/core';
import {IProductModel} from "../../../../models/i-product-model";
import {environment} from "../../../../../environments/environment";
import {APIPath} from "../../../../constance/api-path";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('productCard') productChildren: IProductModel | undefined;
  imageStatus = false;
  url = APIPath.image.url;

  constructor() {
  }

  ngOnInit(): void {
    if(this.productChildren){
    }
  }
}
