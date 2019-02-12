import { RouterModule, Routes } from '@angular/router';
import {CalculateRateComponent} from './calculate-rate/calculate-rate.component';


const routes: Routes = [
  { path: 'calculate-rate', component: CalculateRateComponent },
  {path : '', component : CalculateRateComponent}
];

export const routing = RouterModule.forRoot(routes);
