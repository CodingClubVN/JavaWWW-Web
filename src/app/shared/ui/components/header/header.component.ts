import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { HeaderConfig, ILink } from 'src/app/configs/header-config';
import { SubMenuModalComponent } from '../sub-menu-modal/sub-menu-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  headerMenuConfig = HeaderConfig.menu;
  isMenuOpen?: boolean = false;
  bsModalRef?: BsModalRef;
  @ViewChild('openMenu', {static: true}) btnOpenMenu?: ElementRef;

  constructor(
    private modalService: BsModalService
  ) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
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
}
