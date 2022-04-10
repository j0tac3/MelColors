import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorObject } from '../models/colorobject.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private url = 'http://127.0.0.1:8000/api/color';
  private url_prod = 'https://melcolorsapi.herokuapp.com/api/color';

  constructor( private http : HttpClient) { }

  getColor() : Observable<any> {
    return this.http.get(this.url_prod);
  };

  addColort(color: ColorObject): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(color);
    return this.http.post<ColorObject>(this.url_prod, body, {'headers': headers});
  };

  updateColor(color: ColorObject): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(color);
    return this.http.put<ColorObject>(this.url_prod + '/' + color.id, body, {'headers': headers});
  };

  deleteColor(color: ColorObject): Observable<any>{
    return this.http.delete(`${this.url_prod}/${color.id}`);
  };
}
