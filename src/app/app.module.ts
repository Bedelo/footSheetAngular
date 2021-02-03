import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEquipesComponent,
    AddEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
