import { Injectable } from '@angular/core';

import {map, Observable} from "rxjs";
import {ApiService} from "../_core/api.service";
import {environment} from "../../../environments/environment";
import {IProductModel} from "../../models/i-product-model";
import {HttpResponse} from "@angular/common/http";
import {APIPath} from "../../constance/api-path";

const pathUrl = APIPath.product;
const url = environment.apiPath;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiService: ApiService) { }
  getProducts(): Observable<IProductModel[]>{
    const path = `${url}/${pathUrl.list}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    );
  }
}
