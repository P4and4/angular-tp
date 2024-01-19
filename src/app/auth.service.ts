// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  // Expose the observable part of the isLoggedIn subject
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private router: Router, private authService: AuthService) { }

  login(email: string, password: string): boolean {
    // Your login logic
    // If successful, update the isLoggedIn BehaviorSubject
    this.isLoggedIn.next(true);
    console.log("Login successful, isLoggedIn set to true");
    return true;

}

  logout(): void {
    this.isLoggedIn.next(false);
    console.log("Logged out, isLoggedIn set to false");

  }

  isAuthenticated(): boolean {
    return this.isLoggedIn.value;
  }
}
