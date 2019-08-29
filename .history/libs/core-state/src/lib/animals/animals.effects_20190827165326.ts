import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { AnimalsActionTypes } from './animals.actions';
import { AnimalsService } from '@ten-ngrx/core-data';
import { Animal } from '@ten-ngrx/core-data';

@Injectable({ providedIn: 'root' })
export class AnimalsEffects {
  @Effect()
  loadAnimal$ = this.actions$.pipe(
    ofType(AnimalsActionTypes.LOAD_ANIMAL),
      switchMap((action: LoadAnimal) => this.animalService.all().pipe(
      map((animals: Animal[]) => (new AnimalLoaded(animals)))
    ))
  );

  @Effect()
  addAnimal$ = this.actions$.pipe(
    ofType(AnimalsActionTypes.ADD_ANIMAL),
      switchMap((action: AddAnimal) => this.animalService.create(action.payload).pipe(
      map((animal: Animal) => (new AnimalAdded(animal)))
    ))
  );

  @Effect()
  updateAnimal$ = this.actions$.pipe(
    ofType(AnimalsActionTypes.UPDATE_ANIMAL),
      switchMap((action: UpdateAnimal) => this.animalService.update(action.payload).pipe(
      map((animal: Animal) => (new AnimalUpdated(animal)))
    ))
  );

  @Effect()
  deleteAnimal$ = this.actions$.pipe(
    ofType(AnimalsActionTypes.DELETE_ANIMAL),
      switchMap((action: DeleteAnimal) => this.animalService.delete(action.payload.id).pipe(
      map((animal: Animal) => (new AnimalDeleted(animal)))
    ))
  );

  constructor(
    private actions$: Actions,
    private animalService: AnimalService
  ) {}
}
