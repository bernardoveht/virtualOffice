import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDataComponent } from './graphic-data.component';

describe('GraphicDataComponent', () => {
  let component: GraphicDataComponent;
  let fixture: ComponentFixture<GraphicDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
