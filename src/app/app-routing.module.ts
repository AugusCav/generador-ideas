import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'generador',
    loadChildren: () =>
      import('./modules/generador/generador.module').then(
        (m) => m.GeneradorModule
      ),
  },
  { path: '', redirectTo: 'generador', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
