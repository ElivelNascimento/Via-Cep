import { ViaCepComponent } from './via-cep/via-cep.component';
import { ViaCepModule } from './via-cep/via-cep.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ViaCepComponent
   
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    ViaCepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
