import { Component, OnInit } from '@angular/core';
import { CoffeesService } from '../services/coffees.service';
import { Coffee } from '../interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
coffees$!: Observable<Coffee[]>;
newCoffee: Coffee = {
  id: 0,
  name: '',
  roaster: '',
  date: '',
  location: '',
  origin: '',
  image: ''
};

constructor(private coffeeService: CoffeesService, private router: Router) {}

ngOnInit(): void {
  this.loadCoffees();
}
loadCoffees(): void {
  this.coffees$ = this.coffeeService.getCoffees();
}

addCoffee(): void {
  this.coffeeService.addCoffee(this.newCoffee).subscribe(
    (data) => {
      console.log('Coffee added:', data);
      this.loadCoffees();
      this.clearForm();
    },
    (error) => {
      console.error("Error adding coffee:", error);
    }
  );
}

viewDetails(coffeeId: number): void {
  this.router.navigate(['/coffee', coffeeId]);
}

deleteCoffee(coffeeId: number): void {
  this.coffeeService.deleteCoffee(coffeeId).subscribe(
    () => {
      console.log('You have successfully deleted the coffee bag', coffeeId);
      this.loadCoffees();
    },
    (error) => {
      console.error('Could not delete coffee, no Id exists for that bag', error)
    }
  );
}

clearForm(): void {
  this.newCoffee = {
    id: 0,
    name: '',
    roaster: '',
    date: '',
    location: '',
    origin: '',
    image: '', 
  };
};
}
