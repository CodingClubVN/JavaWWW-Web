import { Injectable } from '@angular/core';
import {apiPath} from "../constance/api_path";
import {map, Observable} from "rxjs";
import {ApiService} from "../_core/api.service";
import {environment} from "../../../environments/environment";
import {ProductModel} from "../../models/product.model";
import {HttpResponse} from "@angular/common/http";

const pathUrl = apiPath.product;
const url = environment.apiPath;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiService: ApiService) { }
  getProducts(): Observable<ProductModel[]>{
    const path = `${url}${pathUrl.list}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    );
  }
}
