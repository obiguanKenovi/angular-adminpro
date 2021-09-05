import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

   public titulo:string;
   public tituloSubcripcion$:Subscription;
  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ) {

         console.log("RXJS información: ",_route.children[0].data); 

        this.tituloSubcripcion$=  this.getArgumentosDeRuta()
        .subscribe(({titulo})=>{
          this.titulo=titulo;
          document.title=`Adminpro-${this.titulo}`
        });
   }

  ngOnDestroy(): void {
   this.tituloSubcripcion$.unsubscribe();
  }

  ngOnInit(): void {

  }


  getArgumentosDeRuta(){
    return this._router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((evento:ActivationEnd)=> evento.snapshot.firstChild===null),
      map((valor:ActivationEnd)=>valor.snapshot.data),
      
     )//.subscribe(({titulo})=>{
    //   this.titulo=titulo;
    //   document.title=`Adminpro-${this.titulo}`
    // });
  }

}
