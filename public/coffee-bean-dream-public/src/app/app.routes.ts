import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { TastedCoffeesComponent } from './modules/tasted-coffees/tasted-coffees.component';
import { CoffeeDetailsComponent } from './modules/coffee-details/coffee-details.component';
// import { AboutMeComponent } from './modules/about-me/about-me.component';

export const routes: Routes = [
  // A route to the home page (component)
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'about-me',
    component: AboutMeComponent,
    // loadChildren: () =>
    //   import('./modules/about-me.module').then((m) => m.AboutMeModule),
  },

  {
    path: 'coffee',
    component: TastedCoffeesComponent
  },
  
  {
    path: 'coffee/:id',
    component: CoffeeDetailsComponent
  }

]
