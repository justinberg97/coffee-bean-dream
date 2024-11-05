import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeesService } from '../../services/coffees.service';
import { Coffee } from '../../interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coffee-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coffee-details.component.html',
  styleUrl: './coffee-details.component.scss'
})
export class CoffeeDetailsComponent implements OnInit {
  coffee!: Coffee;
  rating: number = 0;
  review: string = '';

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const coffeeId = +this.route.snapshot.paramMap.get('id')!;
    this.getCoffeeDetails(coffeeId);
  }

  getCoffeeDetails(id: number): void {
    this.coffeeService.getCoffeeById(id).subscribe(
      (data) => {
        this.coffee = data;
        console.log(this.coffee);
      },
      (error) => {
        console.error('Cannot find the coffee details', error)
      }
    );
  }

  submitReview(): void {
    const updatedCoffee: Coffee = {
    ...this.coffee,
    rating: this.rating,
    review: this.review
  };

  this.coffeeService.updateCoffee(updatedCoffee).subscribe(
    (data) => {
      console.log('Successfully reviewd', data);
      this.router.navigate(['/']);
    },
    (error) => {
      console.error('Cannot submit the review:', error);
    }
  );
}
}
