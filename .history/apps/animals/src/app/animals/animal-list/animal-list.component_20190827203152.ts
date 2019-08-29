import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';

@Component({
  selector: 'ten-ngrx-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  @Input() animals: Animal[];
  @Output() selectAnimal = new EventEmitter();

  constructor() { }

  ngOnInit() {}
}
