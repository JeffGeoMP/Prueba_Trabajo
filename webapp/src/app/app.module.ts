import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CredentialsComponent } from './components/section/credentials/credentials.component';
import { MessagesComponent } from './components/section/messages/messages.component';


//Importacion para forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/**
 * Importacion para toast
 * 
 */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

/**
 * Importacion de servicios
 */
 import { ApiService } from './services/api/api.service'
 import { HttpClientModule } from '@angular/common/http';
import { SearchmessageidComponent } from './components/section/searchmessageid/searchmessageid.component';
import { SearchmessagetagComponent } from './components/section/searchmessagetag/searchmessagetag.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CredentialsComponent,
    MessagesComponent,
    SearchmessageidComponent,
    SearchmessagetagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
