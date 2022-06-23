import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioDatosGeneralesComponent } from './convenio-datos-generales.component';

describe('ConvenioDatosGeneralesComponent', () => {
  let component: ConvenioDatosGeneralesComponent;
  let fixture: ComponentFixture<ConvenioDatosGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioDatosGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioDatosGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
