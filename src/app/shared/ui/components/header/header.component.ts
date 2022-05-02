import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { HeaderConfig } from 'src/app/configs/header-config';
import { ILink } from 'src/app/models/i-link-model';
import { SubMenuModalComponent } from '../sub-menu-modal/sub-menu-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  headerMenuConfig = HeaderConfig.menu;
  isMenuOpen?: boolean = false;
  isUserPanelOpen?: boolean = false;
  isUserCartOpen?: boolean = false;
  isUserCartResponsiveOpen?: boolean = false;
  isUserPanelResponsiveOpen?: boolean = false;
  bsModalRef?: BsModalRef;
  @ViewChild('openMenu', {static: true}) btnOpenMenu?: ElementRef;
  @ViewChild('account') accountERef!: ElementRef;
  @ViewChild('cart') cartRef!: ElementRef;
  @ViewChild('accountResponsive') accountResponsive!: ElementRef;
  @ViewChild('cartResponsive') cartResponsive!: ElementRef;

  // login logic 
  isLoggedIn: boolean = true;

  constructor(
    private modalService: BsModalService
  ) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.addClass();
  }
  addClass(): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    window.addEventListener('scroll', function(){
      const menu = document.querySelector('nav');
      // @ts-ignore
      menu.classList.toggle('sticky', window.scrollY > 85);
    });
  }

  openSubMenuModal(data: ILink): void {
    const inititalState: ModalOptions = {
      initialState: {
        title: data.name,
        data,
      }
    };
    this.bsModalRef = this.modalService.show(SubMenuModalComponent, inititalState);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.btnOpenMenu?.nativeElement?.classList.contains('collapsed');
  }

  toggleUserPanel(): void {
    this.isUserPanelOpen = !this.isUserPanelOpen;
    this.isUserCartOpen = false;
  }

  toggleUserCart(): void {
    this.isUserCartOpen = !this.isUserCartOpen;
    this.isUserPanelOpen = false;
  }

  toggleUserPanelResponsive() {
    this.isUserPanelResponsiveOpen = !this.isUserPanelResponsiveOpen;
    this.isUserCartResponsiveOpen = false;
  }

  toggleUserCartResponsive() {
    this.isUserCartResponsiveOpen = !this.isUserCartResponsiveOpen;
    this.isUserPanelResponsiveOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (!this.accountERef?.nativeElement.contains(event.target)) {
      this.isUserPanelOpen = false;
    }
    if (!this.cartRef?.nativeElement.contains(event.target)) {
      this.isUserCartOpen = false;
    }
    if (!this.accountResponsive?.nativeElement.contains(event.target)) {
      this.isUserPanelResponsiveOpen = false;
    }
    if (!this.cartResponsive?.nativeElement.contains(event.target)) {
      this.isUserCartResponsiveOpen = false;
    }
  }
}
