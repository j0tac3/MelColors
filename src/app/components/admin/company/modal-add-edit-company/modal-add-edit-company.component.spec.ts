import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEditCompanyComponent } from './modal-add-edit-company.component';

describe('ModalAddEditCompanyComponent', () => {
  let component: ModalAddEditCompanyComponent;
  let fixture: ComponentFixture<ModalAddEditCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEditCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEditCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
