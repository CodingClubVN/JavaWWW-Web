import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {IProductModel} from "../../../models/i-product-model";
import {environment} from "../../../../environments/environment";
import {BrandService} from "../../../services/brand/brand.service";
import {IBrandModel} from "../../../models/i-brand-model";



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: IProductModel[] = [];
  listBrand: IBrandModel[] = [];

  constructor(private productService: ProductService,
              private brandService: BrandService) { }

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
    this.brandService.getBrands()
        .subscribe(res => {
              this.listBrand = res;
            },
            error => {
              console.log(error);
            })
  }

}
