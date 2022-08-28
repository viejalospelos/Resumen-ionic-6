import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  route: string = 'https://jsonplaceholder.typicode.com/users';
  routeAlbum: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor( private http: HttpClient ) { }

  getUsuarios(){
    return this.http.get(this.route);
  }

  getAlbumes(){
    return this.http.get<any[]>(this.routeAlbum);
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  // le ponemos un delay para ver el efecto del skeleton-text
  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
                .pipe(
                  delay(1500)
                );
  }
}
