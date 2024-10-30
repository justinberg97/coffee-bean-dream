import { Component, OnInit } from '@angular/core';
import { CoffeesService } from '../services/coffees.service';
import { Coffee } from '../interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
coffees$!: Observable<Coffee[]>;

constructor(private coffeeService: CoffeesService) {}

ngOnInit(): void {
this.coffees$ = this.coffeeService.getCoffees();
this.coffees$.subscribe(
  (data) => {
    console.log(data)
  }
)
}};
