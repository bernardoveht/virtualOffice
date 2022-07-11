import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionCertificadosComponent } from './rendicion-certificados.component';

describe('RendicionCertificadosComponent', () => {
  let component: RendicionCertificadosComponent;
  let fixture: ComponentFixture<RendicionCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendicionCertificadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicionCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
