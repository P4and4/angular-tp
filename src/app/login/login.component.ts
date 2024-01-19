import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  //bch ya9rahom
  // email = 'email';
  // password = 'password'

  //7abit naamel banana in a box
  // [(ngModel)]="user.email"

  user = {
    email: '',
    password: '',
    emailInvalid: false,
    emailDirty: false,
    emailTouched: false,
    passwordInvalid: false,
    passwordDirty: false,
    passwordTouched: false
  };

  constructor(private toastr: ToastrService,
            private fb: FormBuilder,
    )
    // la 2eme façon ici
    {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      });
    }
    // la 2eme façon ici
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      this.toastr.success('Congratulations! Login successful.', 'Success');
      setTimeout(() => {
        this.toastr.success('You passed the form conditions.', 'Success');
      }, 2000);
    } else {
    }
  }


      // la 2eme façon ici
  onSubmit() {
    if (this.loginForm.valid) {
      this.toastr.success('Congratulations! Second Login successful.', 'Success');
      setTimeout(() => {
        this.toastr.success('You passed the Second form conditions.', 'Success');
      }, 2000);
    } else {
    }
  }

}
