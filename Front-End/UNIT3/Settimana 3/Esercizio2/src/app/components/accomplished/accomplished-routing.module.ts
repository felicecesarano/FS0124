import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomplishedComponent } from './accomplished.component';

const routes: Routes = [
    {
        path: '',
        component: AccomplishedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccomplischedModule {}