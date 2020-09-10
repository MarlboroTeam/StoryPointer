import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxPolarChartModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },

  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,
    DxPolarChartModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]

})
export class AppRoutingModule { }
