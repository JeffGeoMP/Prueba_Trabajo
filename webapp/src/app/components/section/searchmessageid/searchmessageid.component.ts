import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api/api.service';
import { AlertsService } from '../../../services/toast/alerts.service';


@Component({
  selector: 'app-searchmessageid',
  templateUrl: './searchmessageid.component.html',
  styleUrls: ['./searchmessageid.component.css']
})
export class SearchmessageidComponent implements OnInit {

  public SearchMessageId!: FormGroup;


  constructor(
    private FormBuilderMeesageId: FormBuilder,
    private Api: ApiService,
    private Toast: AlertsService
  ) { }

  ngOnInit(): void {
    this.SearchMessageId = this.FormBuilderMeesageId.group({
      Id: [''],
      Message: [''],
    });
  }

  SearchId() {    
    console.log(this.SearchMessageId.value.Id);
    
    this.Api.GetMessageId(
      this.SearchMessageId.value.Id
    ).subscribe(resp =>{
      this.Toast.ShowSucces("Operacion Exitosa", "Mensaje Encontrado");
      this.SearchMessageId.setValue({
        Id: this.SearchMessageId.value.Id,
        Message : resp.Message
      });
    },(error) =>{
      console.log(error);
      this.Toast.ShowError("No Se Encontro el Mensaje", "Error: " + error.status);
    });
  }

}
