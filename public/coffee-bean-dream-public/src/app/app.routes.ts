import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeModule } from './modules/about-me.module';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { TastedItemsComponent } from './modules/tasted-items/tasted-items.component';
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
    path: 'tasted-items',
    component: TastedItemsComponent
  }

]
