import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  @Input() foods: any;

  constructor() { }

  ngOnInit() {
    console.log(foods);
  }
}
