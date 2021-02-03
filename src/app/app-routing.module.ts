import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';

const routes: Routes = [
  { path: 'add', component: AddEquipeComponent },
  { path: 'list', component: ListEquipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
