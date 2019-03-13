import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './movie.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:movieId:', component: MovieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
