import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from "./components/home/home.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {SpecialOfferComponent} from "./components/special-offer/special-offer.component";
import {MaintenanceComponent} from "./components/maintenance/maintenance.component";
import {WarrantyAndInsuranceComponent} from "./components/warranty-and-insurance/warranty-and-insurance.component";
import {AdvisoryOffersComponent} from "./components/advisory-offers/advisory-offers.component";
import {AdvisoryDealersComponent} from "./components/advisory-dealers/advisory-dealers.component";
import {CartComponent} from "./components/cart/cart.component";
import {ListProductComponent} from "./components/list-product/list-product.component";
import {UserComponent} from "./components/user/user.component";
import {OrderMeComponent} from "./components/order-me/order-me.component";
import {AdvisoryBrochureComponent} from "./components/advisory-brochure/advisory-brochure.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('../modules/auth/auth.module')
          .then(m => m.AuthModule)
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
      {
        path:'services/special-offer',
        component: SpecialOfferComponent
      },
      {
        path:'services/maintenance',
        component: MaintenanceComponent
      },
      {
        path:'services/warranty-and-insurance',
        component: WarrantyAndInsuranceComponent
      },
      {
        path:'advisory/offers',
        component: AdvisoryOffersComponent
      },
      {
        path:'advisory/dealers',
        component: AdvisoryDealersComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'buy-online/list-product',
        component: ListProductComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'order',
        component: OrderMeComponent
      },
      {
        path: 'advisory/brochure',
        component: AdvisoryBrochureComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
