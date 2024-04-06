import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccomplischedModule } from './accomplished-routing.module';
import { AccomplishedComponent } from './accomplished.component';

@NgModule({
    declarations: [AccomplishedComponent],
    imports: [CommonModule, AccomplischedModule],
})
export class AccomplischedModule {}