import { Component, OnInit } from '@angular/core';
import { AnimalsService, Animal } from '@ten-ngrx/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'ten-ngrx-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals$: any;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.animalsService.all().subscribe(res => this.animals$ = res);
  }
}
