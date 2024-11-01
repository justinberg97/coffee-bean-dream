import { Component, OnInit } from '@angular/core';
import { CoffeesService } from '../../services/coffees.service';
import { Coffee } from '../../interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasted-coffees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasted-coffees.component.html',
  styleUrl: './tasted-coffees.component.scss'
})
export class TastedCoffeesComponent implements OnInit {
  tastedCoffees$!: Observable<Coffee[]>;
  
  constructor(private coffeeService: CoffeesService) {}

  ngOnInit(): void {
    this.loadTastedCoffees();
  }
  loadTastedCoffees(): void {
    this.tastedCoffees$ = this.coffeeService.getTastedCoffees();
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];

    for (let i = 1; i <= 5; i ++) {
      const effectiveRating = rating || 0;
      stars.push(i <= effectiveRating ? '★' : '☆')
    }
    return stars;
  }
}

