import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-places-index',
  templateUrl: './places-index.component.html',
  styleUrls: ['./places-index.component.css']
})
export class PlacesIndexComponent implements OnInit, OnDestroy {
  places: any;
  subscription: Subscription;

  constructor(private placesService: PlacesService,
              private router: Router) { }

   ngOnInit() {
    this.subscription = this.placesService.index().subscribe(res =>{
      console.log(res);
      this.places = res.data.places;
    }, error =>{
      console.log("error");
    });
  }

  ngOnDestroy(){
    if(this.subscription != undefined){
      this.subscription.unsubscribe();
    }
  }

  viewDettail = (id: any) => {
    this.router.navigateByUrl('/places/'+id);
  }
}
