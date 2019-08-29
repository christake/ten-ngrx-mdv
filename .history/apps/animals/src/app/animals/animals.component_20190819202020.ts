import { Component, OnInit } from '@angular/core';
impo

@Component({
  selector: 'ten-ngrx-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {

  }

}
