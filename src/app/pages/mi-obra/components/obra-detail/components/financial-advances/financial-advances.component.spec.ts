import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAdvancesComponent } from './financial-advances.component';

describe('FinancialAdvancesComponent', () => {
  let component: FinancialAdvancesComponent;
  let fixture: ComponentFixture<FinancialAdvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialAdvancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
