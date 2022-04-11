import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/service/category.service';

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

  public newCategory! : FormGroup;

  constructor( private categoryService : CategoryService,
                private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
  }

  onInitForm(){
    this.newCategory = this.fb.group({
      desc : new FormControl('', Validators.required),
      short_desc : new FormControl('', Validators.required),
    });
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
