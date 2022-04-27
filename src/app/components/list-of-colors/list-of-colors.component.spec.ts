import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfColorsComponent } from './list-of-colors.component';

describe('ListOfColorsComponent', () => {
  let component: ListOfColorsComponent;
  let fixture: ComponentFixture<ListOfColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
