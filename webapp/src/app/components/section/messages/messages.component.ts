import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { AlertsService } from '../../../services/toast/alerts.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public AddMessageForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private Api: ApiService,
    private Toast: AlertsService
  ) { }

  ngOnInit(): void {
    this.AddMessageForm = this.formBuilder.group({
      Message: ['', [Validators.required, Validators.minLength(1)]],
      Tag: ['', [Validators.required, Validators.minLength(1)]],
    });
  }


  AddMessage(){
    this.Api.AddMessage(
      this.AddMessageForm.value.Message,
      this.AddMessageForm.value.Tag
    ).subscribe(resp =>{

      this.Toast.ShowSucces(""+resp.Id, 'Mensaje Añadido');
    }, (error) =>{
      this.Toast.ShowError(error.error.Message, "Error: " + error.status)
    })
    this.AddMessageForm.reset();
  }
}
