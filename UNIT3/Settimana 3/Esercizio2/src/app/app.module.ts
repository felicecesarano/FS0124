import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AllTodoComponent } from './components/all-todo/all-todo.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { FormRoutingModule } from './components/form/form-routing.module';
import { AccomplischedModule } from './components/accomplished/accomplished-routing.module';
import { UnaccomplischedModule } from './components/unaccomplished/unaccomplished-routing.module';
import { UserRoutingModule } from './components/user/user-routing.module';

const routes: Route[]= [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'done',
    loadChildren: () => import('./components/accomplished/accomplisched.module').then(m => m.AccomplischedModule)
  },
  {
    path: 'undone',
    loadChildren: () => import('./components/unaccomplished/unaccomplisched.module').then(m => m.UnaccomplischedModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllTodoComponent,
    LoginComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FormRoutingModule,
    AccomplischedModule,
    UnaccomplischedModule,
    UserRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
