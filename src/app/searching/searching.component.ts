import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
  @Output() searchSubmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
