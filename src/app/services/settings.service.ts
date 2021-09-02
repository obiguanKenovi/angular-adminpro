import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _linkTheme=document.querySelector('#theme');
  

  constructor() { 
    console.log('Hola desde mi setting.services');
    //href="./assets/css/colors/default-dark.css"

    const url=localStorage.getItem('theme')||"./assets/css/colors/default-dark.css";
    this._linkTheme?.setAttribute('href',url);
  }

  chengeTheme(colorTheme:string){
     
    const url=`./assets/css/colors/${colorTheme}.css`;
    localStorage.setItem('theme',url);
    this._linkTheme?.setAttribute('href',url);
    this.addCheckToCurrentTheme();
 }

 addCheckToCurrentTheme(){

  const links= document.querySelectorAll('.selector');

  links.forEach(elem=>{
  elem.classList.remove('working');
  const btnTheme=elem.getAttribute('data-theme');
  const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`.trim();
  const currentTheme=this._linkTheme?.getAttribute('href')?.trim();
  if(btnThemeUrl===currentTheme)
  {
    elem.classList.add('working');
  }
  });


}


}
