import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'listedesetudiants', loadChildren: () => import('./listedesetudiants/listedesetudiants.module').then(m => m.ListedesetudiantsModule) }, { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
