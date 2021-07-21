import { Component } from '@angular/core';
import {constantCommon} from './../assets/CommonConstants'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mr. Munshi';
  constantCommon:any;

  constructor() {
    this.constantCommon = constantCommon;
   }

  ngOnInit(): void {
  }
  checkPremission(permissionId){
console.log(permissionId);
return true
  }
}
