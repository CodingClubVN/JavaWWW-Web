import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService
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
      console.log('Password not match');
      return;
    }
    this.authService.createUser(registerData.username, registerData.password);
  }
}
