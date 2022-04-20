import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { HeaderConfig, ILink } from 'src/app/configs/header-config';
import { SubMenuModalComponent } from '../sub-menu-modal/sub-menu-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerMenuConfig = HeaderConfig.menu;
  // match with routerLink
  isActive: string = '';
  bsModalRef?: BsModalRef

  constructor(
    private modalService: BsModalService
  ) { }

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
    this.bsModalRef.content.closeBtnName = 'Đóng';
  }
}
