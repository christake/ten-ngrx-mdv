import { Component, OnInit } from '@angular/core';
import { AnimalsFacade } from '@ten-ngrx/core-state';
import { Observable } from 'rxjs';
import { Animal } from '@ten-ngrx/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ten-ngrx-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  form: FormGroup
  animals$: Observable<Animal[]>;
  selectedAnimal$: Observable<Animal>;

  constructor(
    private fb: FormBuilder,
    private animalsFacade: AnimalsFacade
    ) {
    this.animals$ = animalsFacade.allAnimals$;
    this.selectedAnimal$ = animalsFacade.currentAnimal$;
  }

  ngOnInit() {
    this.load();
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      height: ['', Validators.compose([Validators.required])],
      mass: [null, Validators.compose([Validators.required])],
      continent: ['', Validators.compose([Validators.required])]
    });
  }

  load() {
    this.animalsFacade.loadAnimals();
  }

  selectAnimal(animal: Animal) {
    console.log('animal selected', animal);
    this.form.patchValue(animal);
    this.animalsFacade.selectAnimal(animal.id);
  }
}
