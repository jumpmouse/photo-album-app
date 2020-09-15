import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInputData } from '../core/core.interfaces';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  public profileForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });

  ngOnInit(): void {}

  public onSubmit(formData: FormGroup): void {
    if (formData.status === 'INVALID') {
      formData.markAllAsTouched();
      return;
    }
    this.loginService
      .loginUser(formData.value)
      .subscribe((loginStatus: boolean) => {
        // TODO: check login status
        this.router.navigate(['']);
      });
  }
}
