import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';

//Libreria adicional sobre el uso de observa
import {retry, take,map,filter} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit,OnDestroy {


  /* para concelar el observable primero debo asignarselo a una propiedad de tipo subcription
     como la que se muestra a continuación. */

  public intervalSubs:Subscription;

  constructor() {

   this.suscribirseAlIntervalo();

    /*
    let i=-1;
    const obs$=new Observable(observer=>{
     // let i=-1;
      const intervalo=  setInterval(()=>{

      //console.log('tick');
       //para que se emita un valor...
       i++;
       observer.next(i);
       //como destruir el observador
       //El intervalo no se puede conselar. Por eso hay que asignarselo a una 
       //variable intervalo para asi manipularlo.
       if(i===4)
       {
          clearInterval(intervalo);
          observer.complete();
       }
       if(i===2)
       {
         i=0;
        //console.log('i=2....Error');
         observer.error('i llego al valor de 2');
       }
      
      },2000);
    });
    */
    //Para que un obsevable comiense a trabajar debe suscribirse algien
    //para eso la linea de codigo de abajo. 
     /*
    obs$.pipe(
      retry(1)
    ).subscribe(
      valor=>console.log('subs:',valor),
      error=>console.warn(error),
      ()=>console.info('Obs Terminado')
    );
    */

    this.retornaObasevabla().pipe(
      retry(1)
    ).subscribe(
      valor=>console.log('subs:',valor),
      error=>console.warn(error),
      ()=>console.info('Obs Terminado')
    );
   }

   /*USANDO ESTE METODO SE ESTA MANAERA SE DESJA DE ESTAR SUBCRITO AL INTERVALO ES MUY IMPORTANTE IMPLEMENTAR ESA INTERFAZ PARA 
   TRABAJAR CON OBSERVABLE QUE CONSTANTEMENTE ESTEN EMIIENDO.  */
  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  /* Se creara un metodo que retorne un obsevable */
  retornaObasevabla():Observable<number>{

    let i=-1;
    const obs$=new Observable<number>(observer=>{
     // let i=-1;
      const intervalo=  setInterval(()=>{
       //para que se emita un valor...
       i++;
       observer.next(i);
       //como destruir el observador
       //El intervalo no se puede conselar. Por eso hay que asignarselo a una 
       //variable intervalo para asi manipularlo.
       if(i===4)
       {
          clearInterval(intervalo);
          observer.complete();
       }
       if(i===2)
       {       
         observer.error('i llego al valor de 2');
       }
      
      },2000);
    });
    return obs$;
  }

  suscribirseAlIntervalo(){

    /*El orden en en que se colocan las funciones afecta el retorno  */
  this.intervalSubs=  this.retornaIntervalo().pipe(
      take(10),
                            map(valor=>{
                            return  valor+1;}),
                            filter(valor=>valor%2===0),
                           

    ).subscribe(
      //valor=>console.log(valor)
      console.log
    );
  }

  retornaIntervalo(){

    const intervalo$=interval(1000);
    return intervalo$;
  }

}
  