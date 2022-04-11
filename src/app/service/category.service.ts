import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://127.0.0.1:8000/api/category';
  private url_prod = 'https://melcolorsapi.herokuapp.com/api/category';

  constructor( private http : HttpClient) { }

  getCategories() : Observable<any> {
    return this.http.get<any>(this.url_prod);
  }

  addCategory(category: Category): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(category);
    return this.http.post<Category>(this.url_prod, body, {'headers': headers});
  };

  updateCategory(category: Category): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(category);
    return this.http.put<Category>(this.url_prod, body, {'headers': headers});
  };

  deleteCategory(category: Category): Observable<any>{
    return this.http.delete(`${this.url_prod}/${category.id}`);
  };
}
