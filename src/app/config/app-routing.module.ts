import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from '../app.component';

import { DashBoardComponent } from '../dash-board/dash-board.component';
import { PlacesIndexComponent } from '../places-index/places-index.component';
import { PlaceDetailsComponent } from '../place-details/place-details.component';

import { SubmitPlaceComponent } from '../submit-place/submit-place.component'


const appRoutes: Routes = [
  { path: 'places', component: PlacesIndexComponent },
  { path: 'places/:id', component: PlaceDetailsComponent },
  { path: 'submit-place', component: SubmitPlaceComponent },
  { path: 'home', component: DashBoardComponent },
  { path: '**', component: DashBoardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
