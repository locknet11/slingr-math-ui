import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  api: string = '/api/v1/calculate?';
  mathwebservices: string = window.location.origin + this.api;

  constructor(private httpClient: HttpClient) {}

  async calculate(expression: string, precision: number): Promise<any> {
    console.log(window.location.origin);

    let query = new FormData();
    query.set('expression', btoa(expression));

    if (precision != null && precision != 0) {
      query.set('precision', precision.toString());
    }

    let result = await fetch(this.mathwebservices, {body: query, method: 'POST'})

    return result.text();
  }
}
