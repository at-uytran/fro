import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSearchResultsComponent } from './place-search-results.component';

describe('PlaceSearchResultsComponent', () => {
  let component: PlaceSearchResultsComponent;
  let fixture: ComponentFixture<PlaceSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
