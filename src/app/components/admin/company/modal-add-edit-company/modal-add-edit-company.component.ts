import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  public companies! : Company[];
  public newColor! : FormGroup;

  constructor(private companySercie : CompanyService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm(){
    this.newColor = this.fb.group({
      desc : new FormControl('', Validators.required),
      short_desc : new FormControl('', Validators.required),
    });
  }

  onGetCompanies(){
    this.companySercie.getCompany()
    .subscribe(resp => {
      this.companies = resp.data;
    })
  }

  onSaveCompany(){
    let color = new Company(this.newColor.value);
    this.companySercie.addCompany(color)
    .subscribe(resp => {
      console.log(resp);
      this.addCompany.emit(resp);
    })
  }

  onCloseModal(){
    this.closeModal.emit();
  }

}
