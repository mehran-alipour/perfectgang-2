import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ResidentialComponent } from './services/residential/residential.component';
import { CommercialComponent } from './services/commercial/commercial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NavigationComponent,
    HomeComponent,
    ServicesComponent,
    ResidentialComponent,
    CommercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
