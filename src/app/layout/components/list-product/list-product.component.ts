import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {IProductModel} from "../../../models/i-product-model";
import {environment} from "../../../../environments/environment";
import {BrandService} from "../../../services/brand/brand.service";
import {IBrandModel} from "../../../models/i-brand-model";
import {APIPath} from "../../../constance/api-path";
import {ICategoryDTOModel} from "../../../models/i-category-dto-model";
import {CategoryService} from "../../../services/category/category.service";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: IProductModel[] = [];
  listProductBackUp: IProductModel[] = [];
  listBrand: IBrandModel[] = [];
  listCategory: ICategoryDTOModel[] = [];
  url = APIPath.image.url;
  countProductPage = 9;


  constructor(private productService: ProductService,
              private brandService: BrandService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.listenService();
  }
  listenService(){
    this.productService.getProducts().subscribe(res => {
        this.listProduct = res;
        this.listProductBackUp = res;
        console.log(this.listProduct);
        this.page();
      },
      error => {
        if (error.status === 500) {
          return;
        }
      });
    this.brandService.getBrands()
      .subscribe(res => {
          this.listBrand = res;
          console.log(this.listBrand);
        },
        error => {
          console.log(error);
        })
    this.categoryService.getCategories()
      .subscribe(res => {
          this.listCategory = res;
          console.log(this.listCategory);
        },
        error => {
          console.log(error);
        })
  }

  page(): void{
    this.listProduct = this.listProduct.slice(0,this.countProductPage);
  }

  filterByCategory(category: ICategoryDTOModel): void {
    this.listProduct = this.listProductBackUp;
    this.listProduct = this.listProduct.filter(res => res.categoryDTO?.id === category.id);
  }

  filterByBrand(brand: IBrandModel): void {
    this.listProduct = this.listProductBackUp;
    this.listProduct = this.listProduct.filter(res => res.brandDTO?.id === brand.id);
  }

  showAll(): void{
    this.countProductPage = 9;
    this.listenService();
  }

  showMore(): void{
    this.countProductPage += 9;
    this.listenService();
  }
  checkLengthList(): boolean{
    if(this.listProduct.length === this.listProductBackUp.length){
      return false;
    }else{
      return true;
    }
  }
}
