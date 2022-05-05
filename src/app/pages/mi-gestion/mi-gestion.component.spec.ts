import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiGestionComponent } from './mi-gestion.component';

describe('MiGestionComponent', () => {
  let component: MiGestionComponent;
  let fixture: ComponentFixture<MiGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
