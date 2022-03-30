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
  public openModal = false;
  public currentCompany! : Company;

  constructor( private companyService : CompanyService ) { }
  
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompany()
    .subscribe(resp => {
      this.companies = resp.data;
    });
  }

  onAddCompany(company : Company){
    this.companies.push(company);
    this.openModal = false;
  }

  onUpdateCompany(companyToUpdate : Company){
    for(let company of this.companies){
      if(company.id == companyToUpdate.id){
        company = companyToUpdate;
      }
    }
  }

  onDeleteCompany(company : Company){
    this.companyService.deleteCompany(company)
    .subscribe(resp => {
      console.log(resp);
      this.companies = this.companies.filter(comp => company.id !== comp.id);
    })
  }

  onEditCompany(company : Company){
    this.currentCompany = company;
    this.openModal = true;
  }

  onOpenModal(){
    this.openModal = true;
  }

  onCloseModal(){
    this.openModal = false;
    this.currentCompany = {};
  }

}
