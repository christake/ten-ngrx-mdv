import { Component, OnInit } from '@angular/core';
import { AnimalsFacade } from '@ten-ngrx/core-state';
import { Observable } from 'rxjs';
import { Animal } from '@ten-ngrx/core-data';

@Component({
  selector: 'ten-ngrx-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals$: Observable<any>;

  constructor(private animalsFacade: AnimalsFacade) {
    this.animals$ = animalsFacade.allAnimals$;
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.animalsFacade.loadAnimals();
  }

  selected(animal: Animal) {
    console.log(animal)
  }
}
