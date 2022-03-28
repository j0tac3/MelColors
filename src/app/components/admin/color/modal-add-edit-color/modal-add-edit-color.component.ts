import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Color } from 'src/app/models/color.model';
import { ColorObject } from 'src/app/models/colorobject.model';
import { Company } from 'src/app/models/company.model';
import { CategoryService } from 'src/app/service/category.service';
import { ColorService } from 'src/app/service/color.service';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-modal-add-edit-color',
  templateUrl: './modal-add-edit-color.component.html',
  styleUrls: ['./modal-add-edit-color.component.css']
})
export class ModalAddEditColorComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  public companies! : Company[];
  public categories! : Category[];
  public newColor! : FormGroup;

  constructor(private companySercie : CompanyService,
              private categoryservice : CategoryService,
              private colorService : ColorService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
    this.onGetCompanies();
    this.onGetCategories();
  }

  onInitForm(){
    this.newColor = this.fb.group({
      code : new FormControl('', Validators.required),
      desc_esp : new FormControl('', Validators.required),
      desc_eng : new FormControl('', Validators.required),
      company : new FormControl('', Validators.required),
      category : new FormControl('', Validators.required),
      hex : new FormControl()
    });
  }

  onGetCompanies(){
    this.companySercie.getCompanies()
    .subscribe(resp => {
      this.companies = resp.data;
    })
  }

  onGetCategories(){
    this.categoryservice.getCategories()
    .subscribe(resp => {
      this.categories = resp.data;
    })
  }

  onSaveColor(){
    let color = new ColorObject(this.newColor.value);
    this.colorService.addColort(color)
    .subscribe(resp => {
      console.log(resp);
    })
  }

}
