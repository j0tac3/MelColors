import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() closeModal = new EventEmitter();
  @Output() addColor = new EventEmitter<ColorObject>();
  @Input() currentColor! : ColorObject;

  //public companies! : Company[];
  public categories! : Category[];
  public newColor! : FormGroup;

  constructor(private companySercie : CompanyService,
              private categoryservice : CategoryService,
              private colorService : ColorService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
    //this.onGetCompanies();
    this.onGetCategories();
    this.onInitCurrentColor();
  }

  onInitForm(){
    this.newColor = this.fb.group({
      id : new FormControl(''),
      code : new FormControl(''),
      desc_es : new FormControl(''),
      desc_en : new FormControl(''),
      //company_id : new FormControl('', Validators.required),
      category_id : new FormControl('', Validators.required),
      hex_code : new FormControl('')
    });
  }

  onInitCurrentColor(){
    if (this.currentColor){
      this.newColor.get('id')?.setValue(this.currentColor.id);
      this.newColor.get('code')?.setValue(this.currentColor.code);
      this.newColor.get('desc_es')?.setValue(this.currentColor.desc_es);
      this.newColor.get('desc_en')?.setValue(this.currentColor.desc_en);
      //this.newColor.get('company_id')?.setValue(this.currentColor.company_id);
      this.newColor.get('category_id')?.setValue(this.currentColor.category_id);
      this.newColor.get('hex_code')?.setValue(this.currentColor.hex_code);
    }
  }

  /* onGetCompanies(){
    this.companySercie.getCompany()
    .subscribe(resp => {
      this.companies = resp.data;
    })
  } */

  onGetCategories(){
    this.categoryservice.getCategories()
    .subscribe(resp => {
      this.categories = resp.data;
    })
  }

  onSaveColor(){
    let color = new ColorObject(this.newColor.value);
 /*    if (color.id == null){
      this.onCreateColor(color)
    } else {
      this.onUpdateColor(color)
    } */
    color.id !== null ? this.onUpdateColor(color) : this.onCreateColor(color);
  }

  onCreateColor(color : ColorObject){
    this.colorService.addColort(color)
    .subscribe(resp => {
      color = resp;
      this.addColor.emit(color);
    })
  }

  onUpdateColor(color : ColorObject){
    this.colorService.updateColor(color)
    .subscribe(resp => {
      color = resp;
      this.addColor.emit(color);
    })
  }

  onCloseModal(){
    this.closeModal.emit();
  }

}
