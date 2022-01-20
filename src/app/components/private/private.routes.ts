import { Routes } from '@angular/router';
import { ConstantsService } from 'src/app/config/constants.service';
import { DashboardComponent } from './DashboardClima/dashboard.component';
import { PrivateComponent } from './private.component';

export default [
  {
    path: ConstantsService.getPath('HOME'),
    component: PrivateComponent,
    children:[
      {
        path: ConstantsService.getPath("DASHBOARD"),
        component: DashboardComponent,
      }
    ]
  },
] as Routes;
