import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

import { GeneradorRoutingModule } from './generador-routing.module';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { AyudaComponent } from './ayuda/ayuda.component';

@NgModule({
  declarations: [MainComponent, CardComponent, FooterComponent, AyudaComponent],
  imports: [
    CommonModule,
    GeneradorRoutingModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDividerModule,
  ],
})
export class GeneradorModule {}
