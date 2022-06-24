import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioDatosGeneralesAlternativeComponent } from './convenio-datos-generales-alternative.component';

describe('ConvenioDatosGeneralesAlternativeComponent', () => {
  let component: ConvenioDatosGeneralesAlternativeComponent;
  let fixture: ComponentFixture<ConvenioDatosGeneralesAlternativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioDatosGeneralesAlternativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioDatosGeneralesAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
