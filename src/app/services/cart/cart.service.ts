import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {map, Observable} from "rxjs";
import {IBrandModel} from "../../models/i-brand-model";
import {environment} from "../../../environments/environment";
import {APIPath} from "../../constance/api-path";
import {HttpResponse} from "@angular/common/http";
import {ICartModel} from "../../models/i-cart-model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apiService: ApiService) {}
  getListCartDetail(): Observable<ICartModel[]> {
    const path = `${environment.apiPath}/${APIPath.cartDetial.cart}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    )
  }

  newCartDetail(cart: ICartModel): Observable<IBrandModel> {
    const path = `${environment.apiPath}/${APIPath.cartDetial.new}`;
    return this.apiService.post(path, cart).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

  getCartDetailById(id: number): Observable<IBrandModel> {
    const path = `${environment.apiPath}/${APIPath.cartDetial.cart}/${id}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

  deleteCartDetail(id: number) {
    const path = `${environment.apiPath}/${APIPath.cartDetial.cart}/${id}`;
    return this.apiService.delete(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body);
      })
    )
  }

}
