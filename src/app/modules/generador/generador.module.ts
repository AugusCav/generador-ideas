import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatProgressBar,
  MatProgressBarModule,
} from '@angular/material/progress-bar';

import { GeneradorRoutingModule } from './generador-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, GeneradorRoutingModule, MatProgressBarModule],
})
export class GeneradorModule {}
