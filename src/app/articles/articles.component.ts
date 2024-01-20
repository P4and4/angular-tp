import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
// import { fadeIn, cardAnimation } from './../animations'; // Update with your actual path

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Using OnPush for performance

})
export class ArticlesComponent implements OnInit {

  readonly staticImages: string[] = [
    './../../assets/images/bg1.jpg',
    './../../assets/images/bg3.jpg',
    './../../assets/images/bg4.jpg',
    './../../assets/images/header.jpg',

    // ... other images
  ];

  getImageForArticle(index: number): string {
    return this.staticImages[index % this.staticImages.length];
  }


  articles = [
    {
      id: 1, // make sure each article has a unique id
      title: 'The Resilience of Hope',
      content: 'Amidst the shadows of conflict, the spirit of perseverance emerges in the streets of Gaza.',
      // image: 'https://via.placeholder.com/400x200/000000/FFFFFF/?text=Palestine+1',
      date: new Date('2024-01-20')
    },
    {
      id: 2,
      title: 'Echoes of Yesterday',
      content: 'A reflection on the historical narratives that continue to shape the landscape of the West Bank.',
      // image: 'https://via.placeholder.com/400x200/000000/FFFFFF/?text=Palestine+2',
      date: new Date('2024-01-22')
    },
    {
      id: 3,
      title: 'A Glimpse Beyond the Wall',
      content: 'Exploring the day-to-day life and culture that thrives beyond the barriers.',
      // image: 'https://via.placeholder.com/400x200/000000/FFFFFF/?text=Palestine+3',
      date: new Date('2024-01-25')
    },
    // ...hedhom fake taw mba3ed ki norbtou bel back tet7assen
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewArticleDetail(articleId: number): void {
    this.router.navigate(['/article', articleId]);
  }

  //the summary bch tkoun awel jomla (wala zouz) mel contenu mtaa kol article
  getSummary(content: string): string {
    const sentences = content.split('. ');
    return sentences.length > 1 ? `${sentences[0]}. ${sentences[1]}` : sentences[0];
  }


}
