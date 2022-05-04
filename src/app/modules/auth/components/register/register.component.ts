import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import {NotifyService} from "../../../../services/notify/notify.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService
  ) {
    this.registerForm = this.initRegisterForm();
  }

  ngOnInit(): void {
  }

  initRegisterForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      comfirmPassword: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    const registerData = this.registerForm.getRawValue();
    if(registerData.password != registerData.comfirmPassword) {
      this.notifyService.error("Xác nhận mật khẩu không hợp lệ");
      return;
    }
    this.authService.createUser(registerData.username, registerData.password).subscribe(
      res => {
        this.notifyService.success('Đăng kí tài khoản thành công');
        this.registerForm.reset();
        console.log(res);
      },
      error => {
        console.log(error)
      }
    );
  }
}
