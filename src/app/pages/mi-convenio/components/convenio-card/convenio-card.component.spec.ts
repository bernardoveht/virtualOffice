import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioCardComponent } from './convenio-card.component';

describe('ConvenioCardComponent', () => {
  let component: ConvenioCardComponent;
  let fixture: ComponentFixture<ConvenioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
