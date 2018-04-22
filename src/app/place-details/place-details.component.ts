import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { ActivatedRoute, Router } from '@angular/router';
// import pipe
import { PlaceImagePipe } from '../shared/place-image.pipe'
import { Observable } from 'rxjs/Observable';
import { Response } from "@angular/http";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements AfterViewInit, OnDestroy {
  id: number;
  place: any;
  foods: any;
  comments: any;
  subscription: Subscription;
  routeSubscription: Subscription;

  constructor(private placesService: PlacesService,
              private activatedRoute: ActivatedRoute) {

    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id'];
     });
    this.place = "";
    this.foods = "";
    this.comments = "";
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscription = this.placesService.show(this.id).subscribe(res=>{
      this.place = res.data.place;
      this.foods = res.data.foods;
      this.comments = res.data.comments;
    }, error=> {
      console.log("error");
    })
  }

  ngOnDestroy(){
    if(this.subscription != undefined){
      this.subscription.unsubscribe();
    }
    if(this.routeSubscription != undefined){
      this.routeSubscription.unsubscribe();
    }
  }
}
