import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private toast: ToastrService) { }

  ShowSucces(texto:string, titulo:string){
    this.toast.success(texto, titulo);
  }

  ShowError(texto:string, titulo:string){
    this.toast.error(texto, titulo);
  }

  ShowWarning(texto:string, titulo:string){
    this.toast.warning(texto, titulo);
  }

}
