import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { CarsComponent } from './components/cars/cars.component';

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
      component: CarsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
