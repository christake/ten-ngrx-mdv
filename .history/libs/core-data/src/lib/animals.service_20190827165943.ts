import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Animal } from './animal';

const API = 'https://level-up-api-qllahajrnz.now.sh/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient ) { }

  all() {
    return this.http.get(API);
  }

  create(animal: Animal) {

  }

  update(animal: Animal) {

  }

  delete(animal: Animal) {

  }
}
