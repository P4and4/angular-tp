// home.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  secretMovie!: string;
  userGuess: string = '';
  feedback: string = '';
  attempts: number = 0;

  constructor() {
    this.generateSecretMovie();
  }

  generateSecretMovie() {
    const movies = ['Titanic', 'Inception', 'Jurassic Park', 'Avatar'];
    const randomIndex = Math.floor(Math.random() * movies.length);
    this.secretMovie = movies[randomIndex].toLowerCase(); // Convert to lowercase
  }

  cleanInput(input: string): string {
    return input.toLowerCase().trim().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters and trim whitespaces
  }

  checkGuess() {
    this.attempts++;

    if (this.cleanInput(this.userGuess) === this.secretMovie) {
      this.feedback = `Congratulations! You've guessed the correct movie "${this.secretMovie}" in ${this.attempts} attempts!`;
    } else {
      this.feedback = 'Oops! That\'s not the right movie. Keep trying!';
    }
  }

  playAgain() {
    this.userGuess = '';
    this.feedback = '';
    this.attempts = 0;
    this.generateSecretMovie();
  }
}
