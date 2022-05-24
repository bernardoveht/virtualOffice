import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionesSearchComponent } from './rendiciones-search.component';

describe('RendicionesSearchComponent', () => {
  let component: RendicionesSearchComponent;
  let fixture: ComponentFixture<RendicionesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendicionesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicionesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
