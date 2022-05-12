import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiService } from "./api.service";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(
    private apiService: ApiService,
  ) { }

  uploadImage(image: File, body: any): Observable<any> {
    const path = `${environment.apiPath}/images/new`;
    const formData: FormData = new FormData();

    formData.append('file', image, image.name);
    formData.append('productId', body.productId ? body.productId : '');
    formData.append('brandId', body.brandId ? body.brandId : '');
    formData.append('type', body.type ? body.type : '');


    console.log(formData.has('file'));
    return this.apiService.postFormData(path, formData).pipe(
      map((res: HttpResponse<any>) => console.log(res)),
    );
  }

  updateImage(image: File, imageId: number): Observable<any> {
    const path = `${environment.apiPath}/images/update/${imageId}`;
    const formData: FormData = new FormData();
    formData.append('file', image, image.name); 
    return this.apiService.postFormData(path, formData).pipe(
      map((res: HttpResponse<any>) => console.log(res)),
    );
  }

}
