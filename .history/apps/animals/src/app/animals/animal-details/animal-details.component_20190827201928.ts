import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AnimalsFacade } from '@ten-ngrx/core-state';

@Component({
  selector: 'ten-ngrx-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  animalForm: FormGroup

  @Input() set selectedAnimal(value: Animal) {
    if (value) {
      // this.animalForm.patchValue(value);
    }
  };

  constructor(
    private fb: FormBuilder,
    private animalsFacade: AnimalsFacade
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.animalForm = this.fb.group({
      id: null,
      name: '',
      height: '',
      mass: null,
      continent: ''
    });
  }

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
