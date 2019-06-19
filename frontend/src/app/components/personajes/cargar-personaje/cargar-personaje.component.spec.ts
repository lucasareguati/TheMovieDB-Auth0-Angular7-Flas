import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPersonajeComponent } from './cargar-personaje.component';

describe('CargarPersonajeComponent', () => {
  let component: CargarPersonajeComponent;
  let fixture: ComponentFixture<CargarPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
