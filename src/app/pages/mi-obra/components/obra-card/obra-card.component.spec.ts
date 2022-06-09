import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCardComponent } from './obra-card.component';

describe('ObraCardComponent', () => {
  let component: ObraCardComponent;
  let fixture: ComponentFixture<ObraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObraCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
