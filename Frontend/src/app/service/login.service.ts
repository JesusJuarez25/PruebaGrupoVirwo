import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "../enviroment/enviroment";

@Injectable({
    providedIn: 'root'
})

export class loginService{

    private Api: string;

    constructor(private http: HttpClient){
        //URL el sevidor del backend
        this.Api = enviroment.API_URL;
    }

    //metodo para poder consulir la api
    postLogin(form: any): Observable<Response>{
        let direccion = this.Api+"/login";
        return this.http.post<Response>(direccion,form)
    }
}