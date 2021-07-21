import {environment} from 'src/environments/environment'
export class API{
    public static baseUrl='';

    public static getPostData=environment.apiUrl+"/" ;
    public static fileSubmit=environment.apiUrl+"/" ;


}