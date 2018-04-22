import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { ActivatedRoute, Router } from '@angular/router';
// import pipe
import { PlaceImagePipe } from '../shared/place-image.pipe'


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {
  id: number;
  sub: any;
  place: any;
  foods: any;
  comments: any;

  constructor(private placesService: PlacesService,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id'];
     });
    this.place = "";
    this.foods = "";
    this.comments = "";
  }

  ngOnInit() {

    this.placesService.show(this.id).subscribe(res=>{
      this.place = res.data.place;
      this.foods = res.data.foods;
      this.comments = res.data.comments;
    }, error=> {
      console.log("error");
    })
  }
}
