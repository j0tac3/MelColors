import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMenuCompaniesComponent } from './mini-menu-companies.component';

describe('MiniMenuCompaniesComponent', () => {
  let component: MiniMenuCompaniesComponent;
  let fixture: ComponentFixture<MiniMenuCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniMenuCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMenuCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
