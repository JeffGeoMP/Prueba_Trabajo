import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from "@angular/common/http";
import {AddMessageInterface} from "../../../models/AddMessage.Interface"
import {MessagesInterface} from "../../../models/Messages.Interface"
import {ResponseInterface} from "../../../models/Response.Interface"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL : string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }


  AddCredentials(Key:String, SharedSecret:String){
    let Dir = this.BASE_URL + 'credential';

    let Headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.put<ResponseInterface>(Dir, {
      key: Key,
      shared_secret: SharedSecret
    }, {headers: Headers});
  }

  AddMessage(Message:String, Tags: String){
    let Dir = this.BASE_URL + 'messaqe';

    let Headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<AddMessageInterface>(Dir, {
      msg: Message,
      tags: Tags
    }, {headers: Headers});
  }


  GetMessageId(Id:String){
    let Dir = this.BASE_URL + 'message/' + Id;

    let Headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get<ResponseInterface>(Dir, {headers: Headers});
  }

  GetMessagesTag(Tag:String){
    let Dir = this.BASE_URL + 'messages/' + Tag;

    let Headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.get<MessagesInterface>(Dir, {headers:Headers});
  }
}
