import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EvidenzaComponent } from './components/evidenza/evidenza.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { ConsigliComponent } from './components/consigli/consigli.component';
import { ActiveComponent } from './components/active/active.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { DettagliPostComponent } from './components/dettagli-post/dettagli-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { TagsComponent } from './components/tags/tags.component';
import { HighlightDirective } from './directives/highlight.directive';


const routes: Route[] = [
  {
      path: '',
      component: HomeComponent,
  },
  {
      path: 'active',
      component: ActiveComponent,
  },
  {
      path: 'inactive',
      component: InactiveComponent,
  },
  {
    path:'details/:id',
    component: DettagliPostComponent
  },
{
  path:'allPost',
  component: AllPostComponent
}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EvidenzaComponent,
    DettagliComponent,
    ConsigliComponent,
    ActiveComponent,
    InactiveComponent,
    DettagliPostComponent,
    EditPostComponent,
    AllPostComponent,
    TagsComponent,
    HighlightDirective,
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
