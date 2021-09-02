import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public _label1:string[]= ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public _data = [
    [350, 450, 100,15,150],
    // [50, 150, 120],
    // [250, 130, 70],
  ];

}
