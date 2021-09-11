import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  public FormCredentials!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.FormCredentials = this.formBuilder.group({
      Key: ['', [Validators.required, Validators.minLength(1)]],
      SharedSecret: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  Send(){
    
  }

}
