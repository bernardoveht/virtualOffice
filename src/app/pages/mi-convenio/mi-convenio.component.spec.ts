import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiConvenioComponent } from './mi-convenio.component';

describe('MiConvenioComponent', () => {
  let component: MiConvenioComponent;
  let fixture: ComponentFixture<MiConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiConvenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
