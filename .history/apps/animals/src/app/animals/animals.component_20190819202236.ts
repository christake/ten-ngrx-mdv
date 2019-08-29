import { Component, OnInit } from '@angular/core';
import { AnimalsService, Animal } from '@ten-ngrx/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'ten-ngrx-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals$: Observable<any>;
  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animals$ = this.animalsService.all();
  }
}
