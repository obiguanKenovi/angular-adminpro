import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent  {

  
  progreso1:number=25;
  progreso2:number=35;


  get getPorcentaje1(){
    return `${this.progreso1}%`
  }

  get getPorcentaje2(){
    return `${this.progreso2}%`
  }

  cambioValorHijo(valor:number){
    this.progreso1=valor; 
    
  }
/*
  public progreso:number;
  constructor() {
    this.progreso=50
   }

   get getPorcentaje(){
     return `${this.progreso}%`
   }

  sumarValor(valor:number){
    if(this.progreso<=0 && valor<0)   
      return this.progreso=0;    
    if(this.progreso>=100 && valor>0)  
      return this.progreso=100;
      
    return this.progreso=this.progreso+valor;
  }
  */
 
}
