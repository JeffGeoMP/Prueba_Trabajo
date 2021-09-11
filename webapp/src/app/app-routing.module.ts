import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/section/credentials/credentials.component';
import { MessagesComponent } from './components/section/messages/messages.component';
import { SearchmessageidComponent } from './components/section/searchmessageid/searchmessageid.component';
import { SearchmessagetagComponent } from './components/section/searchmessagetag/searchmessagetag.component';


const routes: Routes = [
  {
    path:'',
    component: CredentialsComponent,
  },
  {
    path: 'message',
    component : MessagesComponent
  },
  {
    path: 'searchid',
    component : SearchmessageidComponent
  },
  {
    path: 'searchtag',
    component : SearchmessagetagComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
