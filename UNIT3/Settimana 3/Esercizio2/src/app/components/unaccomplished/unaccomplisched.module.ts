import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnaccomplishedComponent } from './unaccomplished.component';
import { UnaccomplischedModule } from './unaccomplisched.module';

@NgModule({
    declarations: [UnaccomplishedComponent],
    imports: [CommonModule, UnaccomplischedModule],
})
export class UnaccomplischedModule {}