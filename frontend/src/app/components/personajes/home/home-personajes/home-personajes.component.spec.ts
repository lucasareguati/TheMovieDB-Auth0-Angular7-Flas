import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonajesComponent } from './home-personajes.component';

describe('HomePersonajesComponent', () => {
  let component: HomePersonajesComponent;
  let fixture: ComponentFixture<HomePersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
