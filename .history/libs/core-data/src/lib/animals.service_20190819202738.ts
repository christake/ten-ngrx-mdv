import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const API = 'https://level-up-api-qllahajrnz.now.sh/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClientModule ) { }

  all() {
    return this.http.get(API);
  }
}
