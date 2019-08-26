import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, merge, of, forkJoin } from 'rxjs';
import { catchError, combineLatest, map, mergeMap, tap } from 'rxjs/operators';

// Class Models
import { PaisModel } from '../models/pais.model';

// Environments

@Injectable()
export class PaisesService {

  // HTTP headers
  headersPaises = new HttpHeaders({
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
    'x-rapidapi-key': 'c475e4fe16msh5376848a8ff2ae5p1576f5jsn7c4e1baf3a48',
    'content-type': 'application/json; charset=utf-8'
  });

  constructor(
    private http: HttpClient
  ) { }

  // Leer todos los Paises
  getAllPaises(): Observable<PaisModel[]>  {

    return this.http.get<PaisModel[]>('https://restcountries-v1.p.rapidapi.com/all', { headers: this.headersPaises }).pipe(
      map( data => data)
    )

  }

}
