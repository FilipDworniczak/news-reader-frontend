import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsServiceUrl = environment.apiPath + environment.newsService;

  constructor(private http: HttpClient) { }

  getByCountryAndCategory(country: string, category: string): Observable<any> {
    return this.http.get(this.newsServiceUrl + '/' + country + '/' + category).pipe(map(this.extractNews));
  }

  private extractNews(res: any) {
    return res;
  }
}
