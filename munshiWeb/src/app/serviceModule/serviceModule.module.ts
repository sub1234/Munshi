import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {HttpClientModule,HttpClient} from '@angular/common/http';


@NgModule({
    declarations: [ ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [],
    entryComponents:[],
    exports:[CommonModule,HttpClientModule]
  })
  export class serviceModule { }


