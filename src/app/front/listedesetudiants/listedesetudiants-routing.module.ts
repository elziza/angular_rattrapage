import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListedesetudiantsComponent } from './listedesetudiants.component';

const routes: Routes = [{ path: '', component: ListedesetudiantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListedesetudiantsRoutingModule { }
