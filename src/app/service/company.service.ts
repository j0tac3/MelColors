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

  
  getCompany() : Observable<any> {
    return this.http.get(this.url_prod);
  };

  addCompany(company: Company): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(company);
    return this.http.post<Company>(this.url_prod, body, {'headers': headers});
  };

  updateCompany(company: Company): Observable<any>{
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(company);
    return this.http.post<Company>(this.url_prod, body, {'headers': headers});
  };

  deleteCompany(company: Company): Observable<any>{
    return this.http.delete(`${this.url_prod}/${company.id}`);
  };
}
