import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import privateRoutes from './components/private/private.routes';
import { LandingComponent } from './components/public/landing/landing.component';
import { LoginComponent } from './components/public/login/login.component';
import { ConstantsService } from './config/constants.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: ConstantsService.getPath('LANDING'),
    pathMatch: 'full',
  },
  {
    path: ConstantsService.getPath('LANDING'),
    component: LandingComponent,
  },
  {
    path: ConstantsService.getPath('LOGIN'),
    component: LoginComponent,
  },
  ...privateRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
