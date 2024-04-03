import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnaccomplischedModule } from './unaccomplisched.module';
import { UnaccomplishedComponent } from './unaccomplished.component';

const routes: Routes = [
    {
        path: '',
        component: UnaccomplishedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UnaccomplischedModule {}