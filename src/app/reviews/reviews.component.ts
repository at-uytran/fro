import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() place: any;

  constructor() { }

  ngOnInit() {
    console.log("this.place");
    console.log(this.place);
  }

}
