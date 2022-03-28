import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companies! : Company[];

  constructor( private companyService : CompanyService ) { }
  
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies()
    .subscribe(resp => {
      this.companies = resp.data;
    });
  }

}
