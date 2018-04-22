import { Component, OnInit, Input } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places-index',
  templateUrl: './places-index.component.html',
  styleUrls: ['./places-index.component.css']
})
export class PlacesIndexComponent implements OnInit {
  // places: any;
  @Input() places: any;

  constructor(private placesService: PlacesService) { }

   ngOnInit() {
    this.placesService.index().subscribe(res =>{
      console.log(res);
      this.places = res.data.places;
    }, error =>{
      console.log("error");
    });
  }
}
