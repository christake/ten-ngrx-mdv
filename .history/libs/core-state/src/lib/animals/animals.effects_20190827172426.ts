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
    run: (action: LoadAnimals) => {
      return this.animalService.all().pipe(
        map((animals: Animal[]) => (new AnimalLoaded(animals)))
      )
    }
  });

  @Effect()
  addAnimal$ = this.dataPersistence.pessimisticUpdate(
    AnimalsActionTypes.ADD_ANIMAL, {
      run: (action: AddAnimal) => {
        return this.animalService.create(action.payload).pipe(
          map((animal: Animal) => (new AnimalAdded(animal))))
      },
      onError: (action: AddAnimal, error) => {
        console.error('Error', error);
      }
    });

  @Effect()
  updateAnimal$ = this.dataPersistence.pessimisticUpdate(
    AnimalsActionTypes.UPDATE_ANIMAL, {
      run: (action: UpdateAnimal) => {
        this.animalService.update(action.payload).pipe(
          map((animal: Animal) => (new AnimalUpdated(animal)))
        )
      },
      onError: (action: UpdateAnimal, error) => {
        console.error('Error', error);
      }
    });

  @Effect()
  deleteAnimal$ = this.dataPersistence.pessimisticUpdate(
    AnimalsActionTypes.DELETE_ANIMAL, {
      run: (action: DeleteAnimal) => {
        this.animalService.delete(action.payload.id).pipe(
          map((animal: Animal) => (new AnimalDeleted(animal))
          ))
      },
      onError: (action: DeleteAnimal, error) => {
        console.error('Error', error);
      }
    });

  constructor(
    private dataPersistence: DataPersistence<AnimalState>,
    private animalService: AnimalsService
  ) { }
}
