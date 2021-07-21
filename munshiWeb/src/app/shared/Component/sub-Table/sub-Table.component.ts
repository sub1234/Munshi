import {Component,Input,OnInit,Output,OnDestroy} from '@angular/core';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';

@Component({
  selector: 'sub-Table',
  templateUrl: './sub-Table.component.html',
  styleUrls: ['./sub-Table.component.scss']
})
export class subTableComponent {
  columnDefs: any;
  @Input() rowData: any;
  @Input() tableConfig: any;
  
  public modules: Module[] = AllCommunityModules;
  domLayout: string;

  constructor() { }

  ngOnInit(): void {
    this.columnDefs=this.tableConfig.columnDefs
    this.domLayout = "autoHeight"; 
  }
  
  onGridReady(event){
    console.log(event)
  }

}