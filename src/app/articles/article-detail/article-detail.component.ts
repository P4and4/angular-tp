import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  article: any; // Replace with the appropriate type

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    // tekhou l data mtaa kol article bel id mteeou normalement houni
    // this.article = fetchArticleData(articleId); //faza kima haka
  }

}
