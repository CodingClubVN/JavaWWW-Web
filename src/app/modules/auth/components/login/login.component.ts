import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from 'src/app/services/_core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService
  ) {
    this.loginForm = this.initLoginForm();
  }

  ngOnInit(): void {
  }

  initLoginForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    const loginDetail = this.loginForm.getRawValue();
    console.log(loginDetail.username);
    console.log(loginDetail.password);
    this.authService.userLogin(loginDetail.username, loginDetail.password).subscribe(res => {
      console.log(res);
    },
      error => {
      console.log(error);
      });
  }
}
