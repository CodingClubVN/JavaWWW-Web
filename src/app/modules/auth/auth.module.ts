import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import {StorageService} from "../../services/storage/storage.service";
import {ProductService} from "../../services/product/product.service";
import {AuthService} from "../../services/auth/auth.service";
import {LocalStorageService} from "ngx-webstorage";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    StorageService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass:  LocalStorageService, multi: true}
  ]
})
export class AuthModule { }
