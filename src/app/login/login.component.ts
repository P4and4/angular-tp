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

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLogin() {
    if (this.loginForm.valid) {
      // If successful, show the first toastr
      this.toastr.success('Congratulations! Login successful.', 'Success');

      // Wait for 2 seconds before showing the second toastr
      setTimeout(() => {
        this.toastr.success('You passed the form conditions.', 'Success');
      }, 2000);
    } else {
      // Handle invalid form case or implement your logic accordingly
    }
  }
}
