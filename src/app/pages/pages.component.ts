import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

/* decloro una funcion que existe de manera global 68 */
declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(
    private _settingServices:SettingsService
  ) {}

  ngOnInit() {
    /*Revisar esta instruccion */
    customInitFunctions();
    
  }

}
