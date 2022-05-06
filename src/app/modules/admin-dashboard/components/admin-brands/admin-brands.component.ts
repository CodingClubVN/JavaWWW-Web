import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IBrandModel } from 'src/app/models/i-brand-model';
import { BrandService } from 'src/app/services/brand/brand.service';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { BrandEditModalComponent } from '../brand-edit-modal/brand-edit-modal.component';

@Component({
  selector: 'app-admin-brands',
  templateUrl: './admin-brands.component.html',
  styleUrls: ['./admin-brands.component.scss']
})
export class AdminBrandsComponent implements OnInit, OnDestroy {
  listBrand!: IBrandModel[];
  showedBrands!: IBrandModel[];
  search = '';

  subscription: Subscription = new Subscription();

  constructor(
    private brandService: BrandService,
    public dialog: MatDialog,
    private notifyService: NotifyService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(list => {
      this.listBrand = list;
      this.showedBrands = list;
    })
  }

  openAddDialog(brand?: IBrandModel) {
    const dialogRef = this.dialog.open(BrandEditModalComponent, {
      width: '100%',
      data: brand ? brand : {
        name: '',
        country: '',
        fouderYear: '',
        description: ''
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.brandService.getBrands().subscribe(list => {
          this.listBrand = list;
          this.showedBrands = list;
        })
        this.notifyService.success('Thành công', 'Thành công');
      }
      else if (result == false)
        this.notifyService.error('Thất bại', 'Thất bại');
    });
  }

  onSearch() {
    const result = this.listBrand.filter(brand => brand.name.includes(this.search));
    this.showedBrands = result;
  }

  clearSearch() {
    this.showedBrands = this.listBrand;
    this.search = '';
  }

}
