import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Animal } from './animal';

const API = 'https://level-up-api-qllahajrnz.now.sh/animals';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(API);
  }

  create(animal: Animal) {
    return this.http.post(API, animal);
  }

  update(animal: Animal) {
    console.log(animal.id)
    return this.http.patch(`${API}/${animal.id}`,
      JSON.stringify(animal),
      HEADER
    );
  }

  delete(animalId: number) {
    return this.http.delete(`${API}/${animalId}`);
  }
}
