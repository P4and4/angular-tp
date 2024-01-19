import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  textColor: string = '';
  fontSize: number = 16;
  fontFamily: string = 'Arial';
  editableText = 'This is an example of text.'; // Default text for the editable area
  highlightedWords = ['Palestine', 'peace', 'free']; // Words to highlight

  constructor(private router: Router) {}

  textStyle: any = {};

  applyStyle(): void {
    this.textStyle = {
      'color': this.textColor,
      'font-size': `${this.fontSize}px`,
      'font-family': this.fontFamily,
    };
  }

  toggleStyle(style: string): void {
    document.execCommand(style, false);
  }

  updateText(event: Event): void {
    const element = event.target as HTMLElement;
    this.editableText = element.innerText;
  }

  applyBold(): void {
    document.execCommand('bold', false);
  }

  applyItalic(): void {
    document.execCommand('italic', false);
  }

  publishArticle(): void {
    const articleContent = this.editableText;
    // Logic to save or publish the article
    // For example, call a service to save the article to a backend server

    // After publishing, redirect to the articles page
    this.router.navigate(['/articles']); // Replace '/articles' with your actual route
  }

  }



