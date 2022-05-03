import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: ProductModel[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.listProduct = res;
      console.log(this.listProduct);
    });
  }

}
