import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';

@Component({
  selector: 'ten-ngrx-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnimalListComponent {
  @Input() animals: Animal[];
  @Output() selectAnimal = new EventEmitter();
  @Output() deleteAnimal = new EventEmitter();

  select(animal: Animal) {
    this.selectAnimal.emit(animal);
  }

  remove(animal: Animal) {
    this.deleteAnimal.emit(animal);
  }
}
