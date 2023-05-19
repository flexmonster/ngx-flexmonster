import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexmonsterPivot } from './ngx-flexmonster.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlexmonsterPivot],
  exports: [FlexmonsterPivot]
})
export class FlexmonsterPivotModule { }
