import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
private apiUrl = 'http://localhost:3000/api/coffees';
  constructor(private http: HttpClient) { }
getCoffees(): Observable<Coffee[]> {
  return this.http.get<Coffee[]>(this.apiUrl)
}
}
