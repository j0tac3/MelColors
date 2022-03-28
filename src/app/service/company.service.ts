import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://127.0.0.1:8000/api/company';
  private url_prod = 'https://melcolorsapi.herokuapp.com/api/company';
  
  constructor( private http : HttpClient) { }

  getCompanies() : Observable<any> {
    return this.http.get<any>(this.url_prod).pipe(
			map(this.extractData),
			catchError(this.handleErrorObservable)
    )
  }

  private extractData(res: any) {
    let body = res;
    return body;
  } 

  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  } 
}
