import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '@ten-ngrx/core-data';

@Component({
  selector: 'ten-ngrx-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
  @Input() animals: Animal[];

  constructor() { }

  ngOnInit() {
  }

}
