import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IUserModel} from "../../../../../models/i-user-model";
import {UserService} from "../../../../../services/user/user.service";
import {IOrderModel} from "../../../../../models/i-order-model";
import {OrderService} from "../../../../../services/order/order.service";
import {APIPath} from "../../../../../constance/api-path";

@Component({
  selector: 'app-order-detail-modal',
  templateUrl: './order-detail-modal.component.html',
  styleUrls: ['./order-detail-modal.component.scss']
})
export class OrderDetailModalComponent implements OnInit {
  orderDetail: IOrderModel | undefined;
  url = APIPath.image.url;

  constructor(public dialogRef: MatDialogRef<OrderDetailModalComponent>,
              @Inject(MAT_DIALOG_DATA) public order: IOrderModel,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.listenService();
  }
  listenService(): void{
    if(this.order.id){
      this.orderService.getOrder(parseInt(this.order.id.toString()))
        .subscribe(res => {
          this.orderDetail = res;
          console.log(this.orderDetail);
        })
    }
  }

}
