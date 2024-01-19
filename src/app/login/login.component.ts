import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
// email: any;
// password: any;

  constructor(private toastr: ToastrService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  onLogin() {
    if (this.loginForm.valid) {
      // Replace this with actual login logic
      this.toastr.success('Login successful', 'Success');
    } else {
      // Show an error message if the form is invalid
      this.toastr.error('Please correct the errors in the form', 'Error');
    }
  }
}
