import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth/auth.service';
import {StorageService} from "src/app/services/storage/storage.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private storageService: StorageService
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
    this.authService.userLogin(loginDetail.username, loginDetail.password)
      .subscribe(res => {
          this.storageService.saveToken(res.token);
          this.storageService.saveRole(res.role);
          window.location.href = '/home';
          console.log(res);
          console.log(res.token);
          console.log(res.role);
        },
        error => {
          console.log(error);
        });
  }
}
