import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://your-api-url.com/articles'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  fetchArticleData(articleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${articleId}`);
  }
}
