import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIPath } from 'src/app/constance/api-path';
import { IOrderModel } from 'src/app/models/i-order-model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-oder-detail',
  templateUrl: './oder-detail.component.html',
  styleUrls: ['./oder-detail.component.scss']
})
export class OderDetailComponent implements OnInit {
  order?: IOrderModel;
  apiPath = APIPath;
  status?: string;

  constructor(
    public dialogRef: MatDialogRef<OderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private orderService: OrderService
  ) { 
  }

  ngOnInit(): void {
    this.orderService.getOrder(this.id).subscribe(order => this.order = order);
    if (this.order?.status) {
      this.status = this.order.status;
    } else {
      this.status = 'Mới';
      this.orderService.updateOrderStatus(this.id, this.status).subscribe();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateStatus() {
    if (this.status)
      this.orderService.updateOrderStatus(this.id, this.status).subscribe(res => console.log('updated'));
    this.dialogRef.close(true);
  }

  caculateTotal(quantity: number | undefined, price: number | undefined) {
    if(!quantity)
      quantity = 0;
    if(!price)
      price = 0;
    return quantity * price;
  }
}
