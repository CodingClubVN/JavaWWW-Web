import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { APIPath } from "src/app/constance/api-path";
import { IBrandModel } from "src/app/models/i-brand-model";
import { environment } from "src/environments/environment";
import { ApiService } from "../_core/api.service";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(
    private apiService: ApiService
  ) {

  }

  getBrands(): Observable<IBrandModel[]> {
    const path = `${environment.apiPath}/${APIPath.brand.list}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res);
        return res.body;
      })
    )
  }

  newBrand(brand: IBrandModel): Observable<IBrandModel> {
    const path = `${environment.apiPath}/${APIPath.brand.new}`;
    return this.apiService.post(path, brand).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

  getBrand(id: number): Observable<IBrandModel> {
    const path = `${environment.apiPath}/${APIPath.brand.brands}/${id}`;
    return this.apiService.get(path).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    )
  }

  deleteBrand(id: number) {
    const path = `${environment.apiPath}/${APIPath.brand.brands}/${id}`;
    return this.apiService.delete(path).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body);
      })
    )
  }

  updateBrand(id: number, brand: IBrandModel): Observable<IBrandModel> {
    const path = `${environment.apiPath}/${APIPath.brand.brands}/${id}`;
    return this.apiService.put(path, brand).pipe(
      map((res: HttpResponse<any>) => {
        console.log(res.body);
        return res.body;
      })
    )
  }
}