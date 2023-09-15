import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsTableComponent } from './cocktails-table.component';

describe('DrinkTableComponent', () => {
  let component: CocktailsTableComponent;
  let fixture: ComponentFixture<CocktailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailsTableComponent]
    });
    fixture = TestBed.createComponent(CocktailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
