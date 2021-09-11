import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CredentialsComponent } from './components/section/credentials/credentials.component';
import { MessagesComponent } from './components/section/messages/messages.component';
import { SearchmessagesComponent } from './components/section/searchmessages/searchmessages.component';
import { SystemComponent } from './components/views/system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CredentialsComponent,
    MessagesComponent,
    SearchmessagesComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
