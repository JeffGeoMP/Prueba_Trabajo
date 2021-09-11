import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './components/section/credentials/credentials.component';
import { MessagesComponent } from './components/section/messages/messages.component';
import { SearchmessagesComponent } from './components/section/searchmessages/searchmessages.component';


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
    path: 'search',
    component : SearchmessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
