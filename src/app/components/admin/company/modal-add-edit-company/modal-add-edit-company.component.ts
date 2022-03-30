import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-modal-add-edit-company',
  templateUrl: './modal-add-edit-company.component.html',
  styleUrls: ['./modal-add-edit-company.component.css']
})
export class ModalAddEditCompanyComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() addCompany = new EventEmitter<Company>();
  @Output() updateCompany = new EventEmitter<Company>();
  @Input() currentCompany! : Company;

  public companies! : Company[];
  public newCompany! : FormGroup;

  constructor(private companySercie : CompanyService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
    this.onFillForm();
  }

  onInitForm(){
    this.newCompany = this.fb.group({
      desc : new FormControl('', Validators.required),
      short_desc : new FormControl('', Validators.required),
    });
  }

  onFillForm(){
    if (this.currentCompany){
      this.newCompany.get('desc')?.setValue(this.currentCompany.desc);
      this.newCompany.get('short_desc')?.setValue(this.currentCompany.short_desc);
    }
  }

  onGetCompanies(){
    this.companySercie.getCompany()
    .subscribe(resp => {
      this.companies = resp.data;
    })
  }

  onSaveCompany(){
    if(this.newCompany.valid){
      let company = new Company(this.newCompany.value);
      this.currentCompany ? this.onUpdateCompany(company) : this.onSaveNewCompany(company);
    }
  }

  onSaveNewCompany(company : Company){
      this.companySercie.addCompany(company)
    .subscribe(resp => {
      this.addCompany.emit(resp);
    })
  }

  onUpdateCompany(company : Company){
    company.id = this.currentCompany.id;
    this.companySercie.updateCompany(company)
    .subscribe(resp => {
      this.updateCompany.emit(resp);
    })
  }

  onCloseModal(){
    this.closeModal.emit();
  }

}
