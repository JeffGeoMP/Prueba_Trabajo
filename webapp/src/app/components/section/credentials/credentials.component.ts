import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from "../../../services/api/api.service";
import { AlertsService } from "../../../services/toast/alerts.service";


@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  public FormCredentials !: FormGroup;

  constructor(private formBuilder: FormBuilder, private Api: ApiService, private Toast: AlertsService) { }

  ngOnInit(): void {
    this.FormCredentials = this.formBuilder.group({
      Key: ['', [Validators.required, Validators.minLength(1)]],
      SharedSecret: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  Send(){
    this.Api.AddCredentials(
      this.FormCredentials.value.Key,
      this.FormCredentials.value.SharedSecret
    ).subscribe(resp =>{
      this.Toast.ShowSucces("Operacion Exitosa","Credenciales Añadidas");
    }, (error:any) =>{
      this.Toast.ShowError(error.error.Message, "Error: " + error.status)
    });
    this.FormCredentials.reset();
  }

}
