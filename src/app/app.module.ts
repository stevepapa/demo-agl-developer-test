import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageCatsComponent } from './pages';
import { ListPetsComponent } from './components';
import { FilterPetsPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    PageCatsComponent,
    ListPetsComponent,
    FilterPetsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
