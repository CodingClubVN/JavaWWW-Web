import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred.
      console.error('An error occurred: ', error.error.message);
    } else {
      return throwError(error);
    }
    return throwError('Something went wrong!');
  }

  public post(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      path, body,
      {
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  public postUrlEncoded(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      path, body,
      {
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public get(path: string, options?: any, params?: HttpParams): Observable<any> {
    return this.httpClient.get(
      path,
      {
        params,
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public put(path: string, body?: any): Observable<any> {
    return this.httpClient.put(
      path, body,
      {
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  public delete(path: string): Observable<any> {
    return this.httpClient.delete(
      path,
      {
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

}