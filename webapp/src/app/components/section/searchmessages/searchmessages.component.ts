import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesInterface } from 'src/models/Messages.Interface';
import { ApiService } from '../../../services/api/api.service';
import { AlertsService } from '../../../services/toast/alerts.service';

@Component({
  selector: 'app-searchmessages',
  templateUrl: './searchmessages.component.html',
  styleUrls: ['./searchmessages.component.css']
})
export class SearchmessagesComponent implements OnInit {

  public SearchMessageId!: FormGroup;
  public SearchMessageTag!: FormGroup;

  public Messages !: MessagesInterface[];

  constructor(
    private formBuilder: FormBuilder,
    private Api: ApiService,
    private Toast: AlertsService
  ) { }

  ngOnInit(): void {

    this.SearchMessageId = this.formBuilder.group({
      Id: [''],
      Message: [''],
    });

    this.SearchMessageTag = this.formBuilder.group({
      Tag: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  SearchTag() {
    this.Api.GetMessagesTag(
      this.SearchMessageTag.value.Tag
    ).subscribe(resp =>{
      this.Messages = resp
      this.Toast.ShowSucces("Data Recibida", "Mensajes Encontrados");
    }, (error) =>{
      this.Messages = [];
      this.Toast.ShowError(error.error.Message, "Error: " + error.status);
    })
    
  }

  SearchId() {
    this.Api.GetMessageId(
      this.SearchMessageId.value.Id
    ).subscribe(resp =>{
      this.Toast.ShowSucces("Operacion Exitosa", "Mensaje Encontrado");
      this.SearchMessageId.setValue({
        Id: this.SearchMessageId.value.Id,
        Message : resp.Message
      });
    },(error) =>{
      this.Toast.ShowError(error.error.Message, "Error: " + error.status);
    });
  }
}
