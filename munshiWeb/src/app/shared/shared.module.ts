import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {AgGridModule} from '@ag-grid-community/angular';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgOtpInputModule} from 'ng-otp-input';
import {AppLoaderComponent} from './Component/app-loader/app-loader.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppUploadComponent} from './Component/app-upload/app-upload.component'
import {subTableComponent} from './Component/sub-Table/sub-Table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {TestComp} from './Component/Test_Comp/Test_Comp.component'

@NgModule({
    declarations: [AppLoaderComponent,AppUploadComponent,subTableComponent,TestComp ],
    imports: [
        CommonModule,
        AgGridModule,
        HttpClientModule,
        FormsModule,ReactiveFormsModule,
        NgOtpInputModule,MatProgressSpinnerModule,
        MatFormFieldModule,MatInputModule
        
    ],
    providers: [],
    entryComponents:[],
    exports:[CommonModule,AgGridModule,HttpClientModule,FormsModule,ReactiveFormsModule,NgOtpInputModule,
        AppLoaderComponent,AppUploadComponent,subTableComponent,TestComp]
  })
  export class sharedModule { }


