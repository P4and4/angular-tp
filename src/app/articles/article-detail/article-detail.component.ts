import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    const articleIdParam = this.route.snapshot.paramMap.get('id');

    if (articleIdParam) {
      const articleId = +articleIdParam;
      this.article = this.articleService.fetchArticleData(articleId);
    } else {
      // Handle the null case
      // Perhaps redirect to a different page or show an error message
    }
  }
}
