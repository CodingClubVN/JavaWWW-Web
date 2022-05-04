import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toastr: ToastrService) { }
  success(message: string, title: string = 'Successfully') {
    this.toastr.success(message, title);
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title);
  }

  warning(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title);
  }

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title);
  }
}
