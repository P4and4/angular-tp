// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  // Expose the observable part of the isLoggedIn subject
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor() { }

  login(email: string, password: string): boolean {
    // Your login logic
    // If successful, update the isLoggedIn BehaviorSubject
    this.isLoggedIn.next(true);
    return true;
  }

  logout(): void {
    this.isLoggedIn.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn.value;
  }
}
