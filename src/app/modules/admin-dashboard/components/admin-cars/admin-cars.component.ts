import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProductModel } from 'src/app/models/i-product-model';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { ProductService } from 'src/app/services/product/product.service';
import { CarItemEditComponent } from '../car-item-edit/car-item-edit.component';

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
    private productService: ProductService,
    private notifyService: NotifyService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.listProducts = res;
      this.showedProduct = res;
    })
  }

  onSearch() {
    const result = this.listProducts.filter(product => product.name?.toLowerCase().includes(this.search.toLowerCase()) || product.brandDTO?.name.toLowerCase().includes(this.search.toLowerCase()));
    this.showedProduct = result;
  }

  clearSearch() {
    this.showedProduct = this.listProducts;
    this.search = '';
  }

  openAddDialog(product?: IProductModel) {
    const dialogRef = this.dialog.open(CarItemEditComponent, {
      width: '100%',
      data: product ? product : {
        id: undefined,
        name: '',
        price: 0,
        fuelType: '',
        bodyType: '',
        createdDate: new Date().getTime(),
        updatedDate: new Date().getTime(),
        imageDTOs: [],
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.productService.getProducts().subscribe(list => {
          this.listProducts = list;
          this.showedProduct = list;
        })
        this.notifyService.success('Thành công', 'Thành công');
      }
      else if (result == false)
        this.notifyService.error('Thất bại', 'Thất bại');
    });
  }
}
