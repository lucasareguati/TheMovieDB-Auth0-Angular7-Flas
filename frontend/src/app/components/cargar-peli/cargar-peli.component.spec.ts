import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPeliComponent } from './cargar-peli.component';

describe('CargarPeliComponent', () => {
  let component: CargarPeliComponent;
  let fixture: ComponentFixture<CargarPeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarPeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
