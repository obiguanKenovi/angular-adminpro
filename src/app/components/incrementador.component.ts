import { Component, Input, Output,EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

   @Input('valor') progreso:number;
   @Input() btnClass:string="btn-primary";
   
   
   /* 
    para emitir algo y pasarlo a el componente padre
    debo estar escuchando asi que declaro un evento 
    de tipo @Output.
    
   */

   /* @Output() eventoValorSalida:EventEmitter<number>=new EventEmitter();*/
   @Output('emitido') eventoValorSalida:EventEmitter<number>=new EventEmitter();

  /*@Input() progreso:number;*/
  constructor(){
    this.progreso=0;
  }

  ngOnInit(): void {
   
    this.btnClass=`btn ${this.btnClass}`;
  }

  /*
  get getProcentaje(){
    return `${this.progreso}%`
  }
*/
  sumarValor(numero:number){
    if(this.progreso<=0 && numero<0)
      {
        this.eventoValorSalida.emit(0);
        return this.progreso=0;    
      }   
      
    if(this.progreso>=100 && numero>0)  
      {
        this.eventoValorSalida.emit(100);
        return this.progreso=100;
      }
     console.log('Se emitio el valor -->',this.progreso+numero);
    this.eventoValorSalida.emit(this.progreso+numero);
    return this.progreso=this.progreso+numero;
  }

  onChange(numero:number){
    
    console.log(`Se disparo el onchange con el valor-> ${numero} y valor de progreso-->${this.progreso}`);
    if(numero>=100)
      {
       this.eventoValorSalida.emit(this.progreso=100);
        return this.progreso=100;
      }
      if(numero<=0)
      {
        this.eventoValorSalida.emit(this.progreso=0);
        return this.progreso=0;
      }
      console.log('Valor en el input desde onChange-->',this.progreso);
      this.eventoValorSalida.emit(this.progreso);
    return this.progreso;
    
    

  }
 
}
