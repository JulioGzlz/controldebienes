import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResguardantesComponent } from './resguardantes.component';

describe('ResguardantesComponent', () => {
  let component: ResguardantesComponent;
  let fixture: ComponentFixture<ResguardantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResguardantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResguardantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
