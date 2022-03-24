import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private url = 'http://127.0.0.1:8000/api/color';

  constructor( private http : HttpClient) { }

  getcategory() : Observable<any> {
    return this.http.get(this.url);
  }
}
