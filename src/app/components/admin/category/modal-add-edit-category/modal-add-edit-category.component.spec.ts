import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEditCategoryComponent } from './modal-add-edit-category.component';

describe('ModalAddEditCategoryComponent', () => {
  let component: ModalAddEditCategoryComponent;
  let fixture: ComponentFixture<ModalAddEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEditCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
