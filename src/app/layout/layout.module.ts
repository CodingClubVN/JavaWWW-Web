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


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ListProductComponent,
    ProductDetailComponent,
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
