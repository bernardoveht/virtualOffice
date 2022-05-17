import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionesGridComponent } from './rendiciones-grid.component';

describe('RendicionesGridComponent', () => {
  let component: RendicionesGridComponent;
  let fixture: ComponentFixture<RendicionesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendicionesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicionesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
