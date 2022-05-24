import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  
  constructor(
    public readonly ngZone: NgZone,
    private readonly toast:ToastrService
  ) { }


  public createMessageAlert(options: any): void {

  }
  public  createToastError(message:string){
    this.ngZone.run(() => {
      this.toast.error(message);
    });    
  }




}
