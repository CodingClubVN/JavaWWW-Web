import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {APIPath} from "../../constance/api-path";

const key = APIPath.cookie;
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookieService: LocalStorageService) { }
  public saveToken(token: string): void {
    this.cookieService.clear(key.ID_KEY);
    this.cookieService.store(key.ID_KEY, token);
  }
  public getToken(): any {
    return this.cookieService.retrieve(key.ID_KEY);
  }
  public saveRefreshToken(token: string): void {
    this.cookieService.clear(key.Refresh_Token);
    this.cookieService.store(key.Refresh_Token, token);
  }
  public getRefreshToken(): any {
    return this.cookieService.retrieve(key.Refresh_Token);
  }
  public signOut(): void {
    this.cookieService.clear();
  }
  public saveUsername(username: string): void {
    this.cookieService.store(key.USERNAME_KEY, username);
  }
  public getUsername(): void{
    this.cookieService.retrieve(key.USERNAME_KEY);
  }
  public addCart(product: any): void{
    this.cookieService.store(key.CART, JSON.stringify(product));
  }
  public getCartItem(): any{
    return this.cookieService.retrieve(key.CART) ? JSON.parse(this.cookieService.retrieve(key.CART)) : [];
  }
  public saveRole(role: string): void{
    this.cookieService.store(key.ROLE, role);
  }
  public getRole(): any{
    return this.cookieService.retrieve(key.ROLE);
  }
}
