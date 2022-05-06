import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiService } from "../_core/api.service";
import { APIPath } from "src/app/constance/api-path";
import { map, Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private apiService: ApiService
  ) {
  }

  userLogin(userName: string, password: string): Observable<any> {
    const loginPath = `${environment.apiPath}/${APIPath.auth.login}`;
    const loginData = { userName, password };
    return this.apiService.post(loginPath, loginData)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          console.log(body);
          return body;
        })
      )
  }

  createUser(userName: string, password: string): Observable<any> {
    const registerPath = `${environment.apiPath}/${APIPath.auth.register}`;
    const registerData = { userName, password };
    return this.apiService.post(registerPath, registerData);
  }
}
