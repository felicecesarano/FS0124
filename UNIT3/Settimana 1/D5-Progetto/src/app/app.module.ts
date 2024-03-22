import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturedCarComponent } from './components/featured-car/featured-car.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { DetailsComponent } from './components/details/details.component';
import { LandroverComponent } from './components/landrover/landrover.component';
import { FerrariComponent } from './components/ferrari/ferrari.component';
import { LamborghiniComponent } from './components/lamborghini/lamborghini.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'audi',
    component: AudiComponent,
  },
  {
    path: 'ford',
    component: FordComponent,
  },
  {
    path: 'ferrari',
    component: FerrariComponent,
  },
  {
    path: 'lamborghini',
    component: LamborghiniComponent,
  },
  {
    path: 'landrover',
    component: LandroverComponent,
  },
  
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BrandComponent,
    HomeComponent,
    FeaturedCarComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    DetailsComponent,
    LandroverComponent,
    FerrariComponent,
    LamborghiniComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
