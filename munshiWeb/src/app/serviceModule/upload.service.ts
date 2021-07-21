import {Injectable} from '@angular/core'
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {API} from './../shared/constants/api.constant';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class UploadService {
constructor(private http:HttpClient,){}

public uploadService(data,service){
    let URL= API.fileSubmit;
    var payload = new FormData();
    if(data.files){
    var uploadFiles=data.files
    if(uploadFiles.length>0){
        for (let i=0;i<uploadFiles.length;i++){
            payload.append('files',uploadFiles[i]);
        }
    }else{
        payload.append('files',null)
    }
    payload.append('requestData',data.requestData); 
}
const httpOptions={
    header: new HttpHeaders({
        serviceName:service
    })
}   

return this.postAPiRequest(URL,payload,httpOptions);
} 
public postAPiRequest(url:string,data?:any ,option?:any):Observable<any>{
    return this.http.post(url,data,option)
}


}