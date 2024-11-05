import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeesService } from '../../services/coffees.service';
import { Coffee } from '../../interface';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchTerm: string = '';

  constructor(private coffeeService: CoffeesService, private router: Router) {}

  searchCoffee(): void {
    if (this.searchTerm.trim()) {
      this.coffeeService.getCoffees().subscribe((coffees: Coffee[]) => {
        const coffee = coffees.find(c => c.name.toLowerCase() === this.searchTerm.toLowerCase());
        if (coffee) {
          this.router.navigate(['/coffee', coffee.id])
        } else {
          alert("cannot find the coffee you are looking for");
        }
      });
    }
  }

}
