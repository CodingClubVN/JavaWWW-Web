import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    CarsComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
