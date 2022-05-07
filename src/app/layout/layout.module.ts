import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { UiModule } from '../shared/ui/ui.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { WarrantyAndInsuranceComponent } from './components/warranty-and-insurance/warranty-and-insurance.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ListProductComponent,
    ProductDetailComponent,
    SpecialOfferComponent,
    MaintenanceComponent,
    WarrantyAndInsuranceComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiModule,
    RouterModule,
    CarouselModule
  ]
})
export class LayoutModule { }
