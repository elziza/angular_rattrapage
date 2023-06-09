import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListedesetudiantsRoutingModule } from './listedesetudiants-routing.module';
import { ListedesetudiantsComponent } from './listedesetudiants.component';


@NgModule({
  declarations: [
    ListedesetudiantsComponent
  ],
  imports: [
    CommonModule,
    ListedesetudiantsRoutingModule
  ]
})
export class ListedesetudiantsModule { }
