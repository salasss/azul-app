import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AlphabetComponentComponent } from './alphabet-component/alphabet-component.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  { path: 'alphabet', component: AlphabetComponentComponent }
];
