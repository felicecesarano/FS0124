import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccomplishedComponent } from './accomplished.component';

@NgModule({
  declarations: [AccomplishedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccomplishedComponent
      }
    ])
  ]
})
export class AccomplischedModule { }
