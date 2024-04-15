import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Route[] = [
  {
      path: '',
      component: HomeComponent,
  },
  {
    path: 'fav',
    component: FavoriteComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    NavbarComponent,
    CardProductsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
