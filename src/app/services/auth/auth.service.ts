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

  userLogin(username: string, password: string): void {
    const loginPath = `${environment.apiPath}/${APIPath.auth.login}`;
    const loginData = { username, password };
    this.apiService.post(loginPath, loginData)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          console.log(body);
          return body;
        })
      )
  }

  createUser(username: string, password: string): Observable<any> {
    const registerPath = `${environment.apiPath}/${APIPath.auth.register}`;
    const registerData = { username, password };
    return this.apiService.post(registerPath, registerData);
  }
}