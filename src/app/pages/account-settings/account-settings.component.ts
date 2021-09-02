
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private _settingServcies:SettingsService
  ) {}

  ngOnInit(){
    //href="./assets/css/colors/default-dark.css"
  this._settingServcies.addCheckToCurrentTheme();
   
  }

  chengeTheme(colorTheme:string){  
    this._settingServcies.chengeTheme(colorTheme);
  }

 
}
