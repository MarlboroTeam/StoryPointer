import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxPolarChartModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

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
    DxPolarChartModule, BrowserAnimationsModule, MatSliderModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]

})
export class AppRoutingModule { }
