import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendicionDetailComponent } from './rendicion-detail.component';

describe('RendicionDetailComponent', () => {
  let component: RendicionDetailComponent;
  let fixture: ComponentFixture<RendicionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendicionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendicionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
