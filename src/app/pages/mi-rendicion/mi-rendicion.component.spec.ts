import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiRendicionComponent } from './mi-rendicion.component';

describe('MiRendicionComponent', () => {
  let component: MiRendicionComponent;
  let fixture: ComponentFixture<MiRendicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiRendicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiRendicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
