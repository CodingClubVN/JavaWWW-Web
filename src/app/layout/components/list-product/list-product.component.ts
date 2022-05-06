import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {IProductModel} from "../../../models/i-product-model";
import {environment} from "../../../../environments/environment";



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: IProductModel[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.listProduct = res;
      console.log(this.listProduct);
    },
      error => {
        if(error.status === 500){
          return;
        }
      });
  }

}
