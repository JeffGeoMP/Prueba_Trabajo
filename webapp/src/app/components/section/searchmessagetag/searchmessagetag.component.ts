import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesInterface } from 'src/models/Messages.Interface';
import { ApiService } from '../../../services/api/api.service';
import { AlertsService } from '../../../services/toast/alerts.service';

@Component({
  selector: 'app-searchmessagetag',
  templateUrl: './searchmessagetag.component.html',
  styleUrls: ['./searchmessagetag.component.css']
})
export class SearchmessagetagComponent implements OnInit {

  public SearchMessageTag!: FormGroup;
  public Messages !: MessagesInterface[];

  constructor(
    private FormBuilderMeesageTag: FormBuilder,
    private Api: ApiService,
    private Toast: AlertsService
  ) { }

  ngOnInit(): void {
    this.SearchMessageTag = this.FormBuilderMeesageTag.group({
      Tag: ['',[Validators.required, Validators.minLength(1)]]
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
}
