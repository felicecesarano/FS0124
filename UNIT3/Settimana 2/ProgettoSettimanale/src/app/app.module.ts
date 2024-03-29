import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AllTodoComponent } from './components/all-todo/all-todo.component';
import { AccomplishedComponent } from './components/accomplished/accomplished.component';
import { UnaccomplishedComponent } from './components/unaccomplished/unaccomplished.component';
import { UserComponent } from './components/user/user.component';

const routes: Route[]= [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'done',
    component: AccomplishedComponent,
  },
  {
    path: 'undone',
    component: UnaccomplishedComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllTodoComponent,
    AccomplishedComponent,
    UnaccomplishedComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
