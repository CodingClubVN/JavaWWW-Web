import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../services/order/order.service";
import {IOrderModel} from "../../../models/i-order-model";
import {MatDialog} from "@angular/material/dialog";
import {EditUserModalComponent} from "../user/component/edit-user-modal/edit-user-modal.component";
import {OrderDetailModalComponent} from "./component/order-detail-modal/order-detail-modal.component";

@Component({
  selector: 'app-order-me',
  templateUrl: './order-me.component.html',
  styleUrls: ['./order-me.component.scss']
})
export class OrderMeComponent implements OnInit {
  listOrder: IOrderModel[] = [];

  constructor(private orderService: OrderService,
              public dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.listenService();
  }

  listenService() {
    this.orderService.getOrderMe()
      .subscribe(res => {
          this.listOrder = res;
        },
        error => {
          console.log(error);
        })
  }

  showDetail(order: IOrderModel): void{
    const dialogRef = this.dialog.open(OrderDetailModalComponent, {
      width: '50%',
      data: order
    })
  }
}
