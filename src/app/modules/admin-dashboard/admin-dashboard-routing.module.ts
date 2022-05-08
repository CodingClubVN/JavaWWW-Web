import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminBrandsComponent } from './components/admin-brands/admin-brands.component';
import { AdminCarsComponent } from './components/admin-cars/admin-cars.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';

const routes: Routes = [{
  path: '',
  component: AdminDashboardComponent,
  children: [
    {
      path: '',
      redirectTo: 'cars',
      pathMatch: 'full'
    },
    {
      path: 'cars',
      component: AdminCarsComponent
    },
    {
      path: 'brands',
      component: AdminBrandsComponent
    },
    {
      path: 'orders',
      component: AdminOrdersComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
