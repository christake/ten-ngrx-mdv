import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailsComponent } from './animal/animal-details/animal-details.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, AnimalDetailsComponent, AnimalListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
