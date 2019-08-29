import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import { reducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { AnimalsEffects } from './animals/animals.effects';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AnimalsEffects
    ])
  ]
})
export class CoreStateModule {}
