import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDataComponent } from './progress-data.component';

describe('ProgressDataComponent', () => {
  let component: ProgressDataComponent;
  let fixture: ComponentFixture<ProgressDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
