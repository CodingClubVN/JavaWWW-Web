import { Component, Input, OnInit } from '@angular/core';
import { IOrderModel } from 'src/app/models/i-order-model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order?: IOrderModel;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(status: string) {
    if(status)
      return status == 'Mới' ? 'text-info' : (status == 'Đang xử lý' ? 'text-warning' : (status == 'Thành công' ? 'text-success' : 'text-danger'));
    else
      return 'text-dark';
  }

}
