import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { Equipeservice } from './services/Equipeservice';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Equipeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
