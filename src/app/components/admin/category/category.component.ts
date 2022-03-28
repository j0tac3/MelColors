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

  constructor( private categoryService : CategoryService ) { }
  
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.categoryService.getCategories()
    .subscribe(resp => {
      this.categories = resp.data;
    });
  }
}
