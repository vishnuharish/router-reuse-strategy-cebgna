import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { routerModule } from './app.routing';
import { CustomRouteReuseStrategy } from './router-strategy';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routerModule ],
  declarations: [ AppComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy
  }]
})
export class AppModule { }
