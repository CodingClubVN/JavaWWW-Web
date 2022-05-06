import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminCarsComponent } from './components/admin-cars/admin-cars.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminBrandsComponent } from './components/admin-brands/admin-brands.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandEditModalComponent } from './components/brand-edit-modal/brand-edit-modal.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminCarsComponent,
    AdminPanelComponent,
    AdminBrandsComponent,
    BrandEditModalComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    UiModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminDashboardModule { }
