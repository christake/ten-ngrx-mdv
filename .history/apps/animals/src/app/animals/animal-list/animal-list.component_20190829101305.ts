import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';
import { AnimalsFacade } from '@ten-ngrx/core-state';

@Component({
  selector: 'ten-ngrx-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalListComponent implements OnInit {
  @Input() animals: Animal[];
  @Output() selectAnimal = new EventEmitter();

  constructor(private animalsFacade: AnimalsFacade) { }

  ngOnInit() {}

  select(animal: Animal) {
    this.selectAnimal.emit(animal);
  }

  deleteAnimal(animal: Animal) {
    this.animalsFacade.deleteAnimal(animal);
  }
}
