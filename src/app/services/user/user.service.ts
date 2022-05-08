import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {IOrderModel} from "../../models/i-order-model";
import {environment} from "../../../environments/environment";
import {APIPath} from "../../constance/api-path";
import {HttpResponse} from "@angular/common/http";
import {ApiService} from "../_core/api.service";
import {IUserModel} from "../../models/i-user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }
  getMe(): Observable<IUserModel> {
    const path = `${environment.apiPath}/${APIPath.user.me}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    )
  }

  updateUser(user: IUserModel) {
    const path = `${environment.apiPath}/${APIPath.user.me}`;
    return this.apiService.put(path, user).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }
}
