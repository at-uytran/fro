import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesIndexComponent } from './places-index.component';

describe('PlacesIndexComponent', () => {
  let component: PlacesIndexComponent;
  let fixture: ComponentFixture<PlacesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
