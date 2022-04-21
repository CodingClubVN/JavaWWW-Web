import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ILink } from 'src/app/configs/header-config';

@Component({
  selector: 'app-sub-menu-modal',
  templateUrl: './sub-menu-modal.component.html',
  styleUrls: ['./sub-menu-modal.component.scss']
})
export class SubMenuModalComponent implements OnInit {
  title?: string;
  data?: ILink;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

}
