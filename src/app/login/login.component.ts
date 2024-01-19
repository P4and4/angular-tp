import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Adjust the path as per your project structure

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  // Getter methods for easy access to form fields
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Safely accessing form control values
      const email = this.loginForm.get('email')?.value ?? '';
      const password = this.loginForm.get('password')?.value ?? '';

      // Perform the login action
      const success = this.authService.login(email, password);
      if (success) {
        console.log('Login Successful');
        // Navigate to another route or perform additional actions
      } else {
        console.log('Login Failed');
        // Handle login failure
      }
    } else {
      // Form is invalid
      console.log('Form is Invalid');
    }
  }
}
