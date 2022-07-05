import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartsDataComponent } from './line-charts-data.component';

describe('LineChartsDataComponent', () => {
  let component: LineChartsDataComponent;
  let fixture: ComponentFixture<LineChartsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
