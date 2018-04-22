import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-search-results',
  templateUrl: './place-search-results.component.html',
  styleUrls: ['./place-search-results.component.css']
})
export class PlaceSearchResultsComponent implements OnInit {
  @Input() places: any;

  constructor() { }

  ngOnInit() {
  }

}
