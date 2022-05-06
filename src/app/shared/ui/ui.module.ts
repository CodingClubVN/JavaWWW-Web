import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SubMenuModalComponent } from './components/sub-menu-modal/sub-menu-modal.component';
import { UserCartModalComponent } from './components/user-cart-modal/user-cart-modal.component'
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BrandItemComponent } from './components/brand-item/brand-item.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SubMenuModalComponent,
    UserCartModalComponent,
    ProductCardComponent,
    BrandItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    FormsModule
  ],
    exports: [
        FooterComponent,
        HeaderComponent,
        NotFoundComponent,
        ProductCardComponent,
        BrandItemComponent
    ]
})
export class UiModule { }
