import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreDataModule } from '@ten-ngrx/core-data';
import { MaterialModule } from '@ten-ngrx/material';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, AnimalDetailsComponent, AnimalListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreDataModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
