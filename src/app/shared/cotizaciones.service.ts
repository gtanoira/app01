import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, from, merge, of, forkJoin, empty } from 'rxjs';
import { catchError, combineLatest, map, mergeMap, tap, groupBy, count, toArray } from 'rxjs/operators';

// Class Models
import { PaisModel } from '../models/pais.model';
import { FromToModel } from '../models/fromTo.model';
import { CotizacionModel } from '../models/cotizacion.model';
import { stringify } from '@angular/compiler/src/util';

// Environments

@Injectable()
export class CotizacionesService {

  // HTTP headers
  headersPaises = new HttpHeaders({
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    'x-rapidapi-key': 'c475e4fe16msh5376848a8ff2ae5p1576f5jsn7c4e1baf3a48',
    'content-type': 'application/json; charset=utf-8'
  });

  constructor(
    private http: HttpClient
  ) { }

  // Obtener las cotizaciones del Día de la fecha
  getTodayCurrencies(cotizacionesABuscar: FromToModel[])  {

    if (cotizacionesABuscar.length > 0) {

      const todayCurrencies = from(cotizacionesABuscar);
      const currency = todayCurrencies.pipe(
        mergeMap(
          fromTo => {
            return this.getCurrencyFromApi(fromTo.from, fromTo.to).pipe(
              map(
                data => {
                  // Devolver la cotizacion buscada
                  return {
                    from: fromTo.from,
                    to: fromTo.to,
                    rate: data
                  };
                }
              ),
              catchError(
                // La API no encontró la cotización solicitada
                err => empty()
              )
            );
          }
        ),
        toArray()
      );

      return currency;

    } else {
      return of([]);
    }
  }

  // Leer todos los paises
  getCurrencyFromApi(fromCurrency: string, toCurrency: string) {

    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('q', '1.0');
    params = params.append('from', fromCurrency);
    params = params.append('to', toCurrency);

    // tslint:disable-next-line: max-line-length
    return this.http.get<PaisModel>(
      'https://currency-exchange.p.rapidapi.com/exchange',
      {
        headers: this.headersPaises,
        params
      }
    );
  }
}
