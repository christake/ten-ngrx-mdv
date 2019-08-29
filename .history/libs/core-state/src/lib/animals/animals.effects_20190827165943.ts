import { Injectable } from '@angular/core';
import { DataPersistence } from '@nrwl/nx';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import {
  AnimalsActionTypes,
  LoadAnimals,
  AnimalLoaded,
  AddAnimal,
  AnimalAdded,
  UpdateAnimal,
  AnimalUpdated,
  DeleteAnimal,
  AnimalDeleted
} from './animals.actions';
import { AnimalsService } from '@ten-ngrx/core-data';
import { Animal } from '@ten-ngrx/core-data';
import { AnimalState } from './animals.reducer';

@Injectable({ providedIn: 'root' })
export class AnimalsEffects {
  @Effect()
  loadAnimal$ = this.dataPersistence.fetch(AnimalsActionTypes.LOAD_ANIMAL, {
    run: (action: LoadAnimals) => this.animalService.all().pipe(
      map((animals: Animal[]) => (new AnimalLoaded(animals)))
    )
  });

  // @Effect()
  // addAnimal$ = this.actions$.pipe(
  //   ofType(AnimalsActionTypes.ADD_ANIMAL),
  //   switchMap((action: AddAnimal) => this.animalService.create(action.payload).pipe(
  //     map((animal: Animal) => (new AnimalAdded(animal)))
  //   ))
  // );

  // @Effect()
  // updateAnimal$ = this.actions$.pipe(
  //   ofType(AnimalsActionTypes.UPDATE_ANIMAL),
  //   switchMap((action: UpdateAnimal) => this.animalService.update(action.payload).pipe(
  //     map((animal: Animal) => (new AnimalUpdated(animal)))
  //   ))
  // );

  // @Effect()
  // deleteAnimal$ = this.actions$.pipe(
  //   ofType(AnimalsActionTypes.DELETE_ANIMAL),
  //   switchMap((action: DeleteAnimal) => this.animalService.delete(action.payload.id).pipe(
  //     map((animal: Animal) => (new AnimalDeleted(animal)))
  //   ))
  // );

  constructor(
    private dataPersistence: DataPersistence<AnimalState>,
    private animalService: AnimalsService
  ) { }
}
