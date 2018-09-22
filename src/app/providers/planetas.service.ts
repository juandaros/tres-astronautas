import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  planetas = [];

  constructor(
    private http: HttpClient
  ) {}

  obtenerPlanetas(){

    const url = "http://demo0761779.mockable.io/angularspaceship/planets";

    return new Promise((resolve, reject) => {

      this.http.get(url).subscribe((result) => {
  
        this.planetas = result['images'];
        resolve();
      }, (error) => {
  
        reject(error);
      });
    });
  }
}
