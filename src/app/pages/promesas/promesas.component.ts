import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
    console.log('Inicio.....');
    this.getUser().then(resp=>console.log(resp));
     /*
    const promesa=new Promise((resolve,reject)=>{

      console.log('Hola soy una promesa');

    if(false)
     { 
       setTimeout(()=>{
        resolve('Esta promesa se resolvio...');
      },3000);
    }
     else{
       reject('Ocurrio un error en esta promesa...');
     }
 
    });

     promesa.then(message=>{
       console.log('Respuesta de mi promesa ',message);
     }).catch(err=>{
       console.log(err);
     });
     */
     console.log('Fin....');
    
  }

  getUser()
  {
       const promesa=new Promise(resolve=>{ 

        fetch('https://reqres.in/api/users/2')
        .then(response=> response.json())
        .then(body=>resolve(body.data))
       });

       return promesa;
      
  }

}
