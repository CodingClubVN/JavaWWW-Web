import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './components/home/home.component';
import {UiModule} from '../shared/ui/ui.module';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ListProductComponent} from './components/list-product/list-product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {SpecialOfferComponent} from './components/special-offer/special-offer.component';
import {MaintenanceComponent} from './components/maintenance/maintenance.component';
import {WarrantyAndInsuranceComponent} from './components/warranty-and-insurance/warranty-and-insurance.component';
import {AdvisoryOffersComponent} from './components/advisory-offers/advisory-offers.component';
import {AdvisoryDealersComponent} from './components/advisory-dealers/advisory-dealers.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartComponent} from './components/cart/cart.component';
import {NgxImageZoomModule} from "ngx-image-zoom";
import {UserComponent} from './components/user/user.component';
import {EditUserModalComponent} from './components/user/component/edit-user-modal/edit-user-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { OrderMeComponent } from './components/order-me/order-me.component';
import { OrderDetailModalComponent } from './components/order-me/component/order-detail-modal/order-detail-modal.component';
import { AdvisoryBrochureComponent } from './components/advisory-brochure/advisory-brochure.component';
import { SuvInfoComponent } from './components/suv-info/suv-info.component';
import { CoupeComponent } from './components/coupe/coupe.component';
import { HatchbackComponent } from './components/hatchback/hatchback.component';
import { SedanComponent } from './components/sedan/sedan.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ListProductComponent,
    ProductDetailComponent,
    SpecialOfferComponent,
    MaintenanceComponent,
    WarrantyAndInsuranceComponent,
    AdvisoryOffersComponent,
    AdvisoryDealersComponent,
    CartComponent,
    UserComponent,
    EditUserModalComponent,
    OrderMeComponent,
    OrderDetailModalComponent,
    AdvisoryBrochureComponent,
    SuvInfoComponent,
    CoupeComponent,
    HatchbackComponent,
    SedanComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiModule,
    RouterModule,
    CarouselModule,
    FormsModule,
    NgxImageZoomModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
