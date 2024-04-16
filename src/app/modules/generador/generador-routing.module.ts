import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AyudaComponent } from './ayuda/ayuda.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneradorRoutingModule {}
