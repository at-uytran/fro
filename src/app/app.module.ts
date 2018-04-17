import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './config/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PlacesIndexComponent } from './places-index/places-index.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

// import services
import { UsersService } from './services/users.service'
import { PlacesService } from './services/places.service';
import { SearchingComponent } from './searching/searching.component';
import { FoodsComponent } from './foods/foods.component';
import { SubmitPlaceComponent } from './submit-place/submit-place.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PlaceImagePipe } from './shared/place-image.pipe';
import { PlaceSearchResultsComponent } from './place-search-results/place-search-results.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashBoardComponent,
    PlacesIndexComponent,
    PlaceDetailsComponent,
    SearchingComponent,
    FoodsComponent,
    SubmitPlaceComponent,
    ReviewsComponent,
    PlaceImagePipe,
    PlaceSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService,
              PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
