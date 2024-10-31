import { Component, OnInit } from '@angular/core';
import { CoffeesService } from '../services/coffees.service';
import { Coffee } from '../interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

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
  name: '',
  roaster: '',
  date: '',
  location: '',
  origin: '',
  image: ''
};

constructor(private coffeeService: CoffeesService) {}

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

clearForm(): void {
  this.newCoffee = {
    name: '',
    roaster: '',
    date: '',
    location: '',
    origin: '',
    image: '', 
  };
};
}
