import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {ICartModel} from "../../models/i-cart-model";
import {environment} from "../../../environments/environment";
import {APIPath} from "../../constance/api-path";
import {HttpResponse} from "@angular/common/http";
import {IBrandModel} from "../../models/i-brand-model";
import {ApiService} from "../_core/api.service";
import {IOrderModel} from "../../models/i-order-model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }
  getListOrder(): Observable<IOrderModel[]> {
    const path = `${environment.apiPath}/${APIPath.order.list}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    )
  }

  getOrder(id: number): Observable<IOrderModel> {
    const path = `${environment.apiPath}/${APIPath.order.detail}/${id}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

  updateOrderStatus(id: number, status: string) {
    const path = `${environment.apiPath}/${APIPath.order.updateStatus}/${id}`;
    return this.apiService.put(path, { status }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

  newCartDetail(order: IOrderModel): Observable<IBrandModel> {
    const path = `${environment.apiPath}/${APIPath.order.new}`;
    return this.apiService.post(path, order).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

}
