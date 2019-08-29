import { Action } from '@ngrx/store';
import { Animal } from '@ten-ngrx/core-data';

export enum AnimalActionTypes {
  ANIMAL_SELECTED = '[ANIMAL] Selected',
  LOAD_ANIMAL = '[ANIMAL] Load Animal',
  ANIMAL_LOADED = '[ANIMAL] Animal Loaded',
  ADD_ANIMAL = '[ANIMAL] Add Animal',
  ANIMAL_ADDED = '[ANIMAL] Animal Added',
  UPDATE_ANIMAL = '[ANIMAL] Update Animal',
  ANIMAL_UPDATED = '[ANIMAL] Animal Updated',
  DELETE_ANIMAL = '[ANIMAL] Delete Animal',
  ANIMAL_DELETED = '[ANIMAL] Animal Deleted',
}

export class AnimalSelected implements Action {
  readonly type = AnimalActionTypes.ANIMAL_SELECTED;
  constructor(public payload: any) { }
}

export class LoadAnimals implements Action {
  readonly type = AnimalActionTypes.LOAD_ANIMAL;
  constructor() { }
}

export class AnimalLoaded implements Action {
  readonly type = AnimalActionTypes.ANIMAL_LOADED;
  constructor(public payload: Animal[]) { }
}

export class AddAnimal implements Action {
  readonly type = AnimalActionTypes.ADD_ANIMAL;
  constructor(public payload: Animal) { }
}

export class AnimalAdded implements Action {
  readonly type = AnimalActionTypes.ANIMAL_ADDED;
  constructor(public payload: Animal) { }
}

export class UpdateAnimal implements Action {
  readonly type = AnimalActionTypes.UPDATE_ANIMAL;
  constructor(public payload: Animal) { }
}

export class AnimalUpdated implements Action {
  readonly type = AnimalActionTypes.ANIMAL_UPDATED;
  constructor(public payload: Animal) { }
}

export class DeleteAnimal implements Action {
  readonly type = AnimalActionTypes.DELETE_ANIMAL;
  constructor(public payload: Animal) { }
}

export class AnimalDeleted implements Action {
  readonly type = AnimalActionTypes.ANIMAL_DELETED;
  constructor(public payload: Animal) { }
}

export type AnimalActions = AnimalSelected
  | LoadAnimals
  | AnimalLoaded
  | AddAnimal
  | AnimalAdded
  | UpdateAnimal
  | AnimalUpdated
  | DeleteAnimal
  | AnimalDeleted
  ;
