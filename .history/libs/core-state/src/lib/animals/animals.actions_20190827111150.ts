import { Action } from '@ngrx/store';

export enum AnimalActionTypes {
  _SELECTED = '[] Selected',
  LOAD_ = '[] Load Animal',
  _LOADED = '[] Animal Loaded',
  ADD_ = '[] Add Animal',
  _ADDED = '[] Animal Added',
  UPDATE_ = '[] Update Animal',
  _UPDATED = '[] Animal Updated',
  DELETE_ = '[] Delete Animal',
  _DELETED = '[] Animal Deleted',
}

export class AnimalSelected implements Action {
  readonly type = AnimalActionTypes._SELECTED;
  constructor(public payload: any) { }
}

export class LoadAnimals implements Action {
  readonly type = AnimalActionTypes.LOAD_;
  constructor() { }
}

export class AnimalLoaded implements Action {
  readonly type = AnimalActionTypes._LOADED;
  constructor(public payload: Animal[]) { }
}

export class AddAnimal implements Action {
  readonly type = AnimalActionTypes.ADD_;
  constructor(public payload: Animal) { }
}

export class AnimalAdded implements Action {
  readonly type = AnimalActionTypes._ADDED;
  constructor(public payload: Animal) { }
}

export class UpdateAnimal implements Action {
  readonly type = AnimalActionTypes.UPDATE_;
  constructor(public payload: Animal) { }
}

export class AnimalUpdated implements Action {
  readonly type = AnimalActionTypes._UPDATED;
  constructor(public payload: Animal) { }
}

export class DeleteAnimal implements Action {
  readonly type = AnimalActionTypes.DELETE_;
  constructor(public payload: Animal) { }
}

export class AnimalDeleted implements Action {
  readonly type = AnimalActionTypes._DELETED;
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
