import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IOrderModel } from 'src/app/models/i-order-model';
import { NotifyService } from 'src/app/services/notify/notify.service';
import { OrderService } from 'src/app/services/order/order.service';
import { OderDetailComponent } from '../oder-detail/oder-detail.component';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
  listOrders!: IOrderModel[];
  showedOrders!: IOrderModel[];
  search = '';
  
  subscription: Subscription = new Subscription();

  constructor(
    private orderService: OrderService,
    public dialog: MatDialog,
    private notifyService: NotifyService
  ) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.orderService.getListOrder().subscribe(list => {
      this.listOrders = list;
      this.showedOrders = list;
    });
  }

  onSearch() {
    const result = this.listOrders.filter(order => 
      order.user?.firstName.toLowerCase().includes(this.search) ||
      order.user?.lastName.toLowerCase().includes(this.search) ||
      order.user?.telephone.toLowerCase().includes(this.search)
    );
    this.showedOrders = result;
  }

  clearSearch() {
    this.showedOrders = this.listOrders;
    this.search = '';
  }

  openAddDialog(order?: IOrderModel) {
    const dialogRef = this.dialog.open(OderDetailComponent, {
      width: '100%',
      data: order?.id
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.orderService.getListOrder().subscribe(list => {
          this.listOrders = list;
          this.showedOrders = list;
        })
        this.notifyService.success('Thành công', 'Thành công');
      }
      else if (result == false)
        this.notifyService.error('Thất bại', 'Thất bại');
    });
  }
}
