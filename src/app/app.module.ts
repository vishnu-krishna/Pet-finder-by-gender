import { FindPetsService } from './app/find-pets/find-pets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindPetsComponent } from './app/find-pets/find-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    FindPetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [FindPetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
