import {Component,Input,OnInit,Output,OnDestroy} from '@angular/core';
import {sampleProperty} from './../../constants/grid-properties.constant'

@Component({
  selector: 'sample-comp',
  templateUrl: './Test_Comp.component.html',
  styleUrls: ['./Test_Comp.component.scss']
})
export class TestComp {
 
  constructor() { }
  tableConfig=sampleProperty;
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
  ngOnInit(): void {
  }

}