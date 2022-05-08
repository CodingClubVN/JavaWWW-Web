import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {APIPath} from "../../constance/api-path";
import {HttpResponse} from "@angular/common/http";
import {ApiService} from "../_core/api.service";
import {ICategoryDTOModel} from "../../models/i-category-dto-model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) { }
  getCategory(): Observable<ICategoryDTOModel[]> {
    const path = `${environment.apiPath}/${APIPath.category.list}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    )
  }
}
