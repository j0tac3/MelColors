import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCompaniesComponent } from './menu-companies.component';

describe('MenuCompaniesComponent', () => {
  let component: MenuCompaniesComponent;
  let fixture: ComponentFixture<MenuCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
