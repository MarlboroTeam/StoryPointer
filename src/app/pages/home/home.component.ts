import {NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPolarChartModule } from 'devextreme-angular';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

export class Production {
    arg: string;
    lemons: number;
}

let productionData: Production[] = [{
    arg: "Dimensione",
    lemons: 10,
}, {
    arg: "Complessità",
    lemons: 5, 
}, {
    arg: "Estraneità dominio",
    lemons: 3,
}, {
    arg: "Rischio",
    lemons: 4,
}, {
    arg: "Interazione Extra Team",
    lemons: 3,
}];

@Injectable()
export class Service {
    getProductionData(): Production[] {
        return productionData;
    }
}

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ],
  providers: [Service]
})

export class HomeComponent {
  productionData: Production[];

  constructor(service: Service) {
      this.productionData = service.getProductionData();
  }

}




