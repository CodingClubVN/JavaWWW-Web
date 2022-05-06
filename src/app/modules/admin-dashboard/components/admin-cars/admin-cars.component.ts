import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/app/models/i-product-model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.scss']
})

export class AdminCarsComponent implements OnInit {
  listProducts!: IProductModel[];
  showedProduct!: IProductModel[];
  search = '';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.listProducts = res;
      this.showedProduct = res;
    })
  }

  onSearch() {
    const result = this.listProducts.filter(product => product.name?.includes(this.search));
    this.showedProduct = result;
  }

  clearSearch() {
    this.showedProduct = this.listProducts;
    this.search = '';
  }

  openAddDialog(product?: any) {

  }


}
