import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalAdvancesComponent } from './physical-advances.component';

describe('PhysicalAdvancesComponent', () => {
  let component: PhysicalAdvancesComponent;
  let fixture: ComponentFixture<PhysicalAdvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalAdvancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
