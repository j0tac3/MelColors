import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEditColorComponent } from './modal-add-edit-color.component';

describe('ModalAddEditColorComponent', () => {
  let component: ModalAddEditColorComponent;
  let fixture: ComponentFixture<ModalAddEditColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEditColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddEditColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
