import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Company } from 'src/app/models/company.model';
import { CategoryService } from 'src/app/service/category.service';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-modal-add-edit-category',
  templateUrl: './modal-add-edit-category.component.html',
  styleUrls: ['./modal-add-edit-category.component.css']
})
export class ModalAddEditCategoryComponent implements OnInit {
  @Input() currentCategory! : Category;
  @Output() closeModal = new EventEmitter();
  @Output() addCategory = new EventEmitter<Category>();
  @Output() updateCategory = new EventEmitter<Category>();

  public companies! : Company[];

  public newCategory! : FormGroup;

  constructor( private categoryService : CategoryService,
                private companyService : CompanyService,
                private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
    this.onGetCompanies();
    this.onFillForm();
    console.log(this.currentCategory);
  }

  onInitForm(){
    this.newCategory = this.fb.group({
      id : new FormControl(''),
      desc : new FormControl('', Validators.required),
      short_desc : new FormControl(''),
      company_id : new FormControl(''),
    });
  }

  onFillForm(){
    if(this.currentCategory){
      this.newCategory.get('id')?.setValue(this.currentCategory.id);
      this.newCategory.get('desc')?.setValue(this.currentCategory.desc);
      this.newCategory.get('short_desc')?.setValue(this.currentCategory.short_desc);
      this.newCategory.get('company_id')?.setValue(this.currentCategory.company_id);
    }
  }

  onGetCompanies(){
    this.companyService.getCompany()
    .subscribe(resp => {
      this.companies = resp.data;
    })
  }

  onSaveCcategory(){
    if(this.newCategory.valid){
      let company = new Category(this.newCategory.value);
      this.currentCategory ? this.onUpdateCategory(company) : this.onSaveNewCategory(company);
    }
  }

  onSaveNewCategory(category : Category){
    this.categoryService.addCategory(category)
    .subscribe(resp => {
      let categoryAdded = new Category(resp);
      this.addCategory.emit(categoryAdded);
    })
  }

  onUpdateCategory(category : Category){
    if(this.newCategory.valid){
      category.id = this.currentCategory.id;
      this.categoryService.updateCategory(category)
      .subscribe(resp => {
        this.updateCategory.emit(category);
      })
    }
  }

  onCloseModal(){
    this.closeModal.emit();
  }

}
