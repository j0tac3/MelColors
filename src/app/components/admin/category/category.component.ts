import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories! : Category[];
  public currentCategory! : Category;
  public emptyCategory! : Category;
  public openModal = false;

  constructor( private categoryService : CategoryService ) { }
  
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(resp => {
      this.categories = resp.data;
    });
  }

  onAddCategory(category : Category){
    this.openModal = false;
    this.categories.push(category);
  }

  onUpdateCategory(category : Category){
    this.openModal = false;
    this.getCategories();
  }

  onDeleteCategory(categoryToDelete : Category){
    this.categoryService.deleteCategory(categoryToDelete)
    .subscribe(resp => {
      let categoriesFiltered = this.categories.filter(category => categoryToDelete.id !== category.id);
      this.categories = categoriesFiltered;
    });
  }

  onEditCategory(category : Category){
    this.currentCategory = category;
    this.openModal = true;
  }

  onOpenModal(){
    this.openModal = true;
  }

  onCloseModal(){
    this.openModal = false;
    this.currentCategory = this.emptyCategory;
  }
}
