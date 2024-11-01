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

addCoffee(coffee: Coffee): Observable<Coffee> {
  return this.http.post<Coffee>(this.apiUrl, coffee)
}

getCoffeeById(id: number): Observable<Coffee> {
  return this.http.get<Coffee>(`${this.apiUrl}/${id}`);
}

updateCoffee(coffee: Coffee): Observable<Coffee> {
  return this.http.put<Coffee>(`${this.apiUrl}/${coffee.id}`, coffee);
}

deleteCoffee(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`)
}

getTastedCoffees(): Observable<Coffee[]> {
  return this.http.get<Coffee[]>(`${this.apiUrl}/tasted`)
}
}
