import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';
import { AnimalsFacade } from '@ten-ngrx/core-state';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ten-ngrx-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  @Input() selectedAnimal: Animal;
  @Input() animalForm: FormGroup;

  constructor(
    private animalsFacade: AnimalsFacade
  ) { }

  ngOnInit() {}

  save(animalForm: FormGroup) {
    const animal = animalForm.getRawValue();
    if (animal.id) {
      this.update(animal);
    } else {
      this.create(animal);
    }
    this.reset();
  }

  create(animal: Animal) {
    this.animalsFacade.createAnimal(animal);
  }

  update(animal: Animal) {
    this.animalsFacade.updateAnimal(animal);
  }

  reset() {
    this.animalForm.reset();
  }
}
