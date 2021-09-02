import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  

  @Input('title') titulo:string='Titulo';
  /*@Input ('label') Tags:string[];*/
  /*@Input ('data') data:number[][];*/

  
  


  @Input('label') _doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Tes-1','Test-2'];
  @Input('data') _doughnutChartData: MultiDataSet = [
    [350, 450, 100,18,14],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public _doughnutChartType: ChartType = 'doughnut';

  public _colors:Colors[]=[
    {
      backgroundColor:['#6857E6','#009FEE','#F02059','#845A00','#00847E']
    }
  ]

  ngOnInit() {
   /*
   if(this.data)
   this._doughnutChartData=this.data;
   */
  }
  
}
