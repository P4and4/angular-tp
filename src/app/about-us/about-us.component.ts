import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private router: Router) {}

  redirectToHome(): void {
    this.router.navigate(['/']);
  }
  redirectToTeam(): void {
    this.router.navigate(['/cv']);
  }
}
