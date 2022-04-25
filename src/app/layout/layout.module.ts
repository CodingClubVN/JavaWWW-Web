import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { UiModule } from '../shared/ui/ui.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiModule
  ]
})
export class LayoutModule { }
