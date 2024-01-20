import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { fadeIn, cardAnimation } from './../animations'; // Update with your actual path

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Using OnPush for performance
  // animations: [fadeIn, cardAnimation]

})
export class ArticlesComponent implements OnInit {
  // isLoading = false;
  // hovering = false;
  articles = [
    {
      title: 'The Resilience of Hope',
      summary: 'Amidst the shadows of conflict, the spirit of perseverance emerges in the streets of Gaza.',
      image: 'https://via.placeholder.com/400x200/000000/FFFFFF/?text=Palestine+1',
      date: new Date('2024-01-20')
    },
    {
      title: 'Echoes of Yesterday',
      summary: 'A reflection on the historical narratives that continue to shape the landscape of the West Bank.',
      image: 'https://via.placeholder.com/400x200/000000/FFFFFF/?text=Palestine+2',
      date: new Date('2024-01-22')
    },
    {
      title: 'A Glimpse Beyond the Wall',
      summary: 'Exploring the day-to-day life and culture that thrives beyond the barriers.',
      image: 'https://via.placeholder.com/400x200/000000/FFFFFF/?text=Palestine+3',
      date: new Date('2024-01-25')
    },
    // ...hedhom fake taw mba3ed ki norbtou tet7assen
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
