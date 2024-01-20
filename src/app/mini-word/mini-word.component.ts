import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private router: Router, private toastr: ToastrService) {}
  articleTitle: string = '';

  textStyle: any = {};
  readonly staticImages: string[] = [
    './../../assets/images/bg1.jpg',
    './../../assets/images/bg3.jpg',
    './../../assets/images/bg4.jpg',
    './../../assets/images/header.jpg',

    // ... other images
  ];
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
      // Basic Validation ll mini word
      if (!this.articleTitle.trim()) {
        this.toastr.error('Please enter a title for the article.');
        return;
      }

      if (!this.editableText || !this.editableText.trim()) {
        this.toastr.error('Please enter content for the article.');
        return;
      }

      console.log('Content:', this.editableText); // Debugging hehe


    const newArticle = {
      id: this.generateUniqueId(), // yeser khayba l faza ama le temps ntouma kamaltou ncheddou rwehna biha
      title: this.articleTitle,
      content: this.editableText,
      date: new Date(),
      image: this.getRandomImage()
    };

    // redirect to the articles page
    this.router.navigate(['/articles']);
  }

// hedhom aamalthom le temps ntouma kamaltou l back
//??
  getRandomImage(): string {
    return this.staticImages[Math.floor(Math.random() * this.staticImages.length)];
  }

  generateUniqueId(): number {
    // Implement unique ID generation logic. For example:
    return Date.now(); // Simple example, might not be unique in all cases
  }

  }



