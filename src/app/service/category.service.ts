import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://127.0.0.1:8000/api/category';

  constructor( private http : HttpClient) { }

  getCategories() : Observable<any> {
    return this.http.get<any>(this.url);
  }
}
