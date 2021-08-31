import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css',]
})
export class NopagefoundComponent {

  public date:number;
  constructor() {
    this.date=new Date().getFullYear();
   }

 
}
