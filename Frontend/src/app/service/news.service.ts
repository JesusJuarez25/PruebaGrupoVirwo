import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GetNews{
    
    //URL del EndPonit
    private APi: string="https://newsapi.org/v2/everything?q=tesla&from=2023-09-01&sortBy=publishedAt&apiKey=9105739a3a714755bbc8167000e6a9af"

    constructor(private http: HttpClient){

    }

    //metodo para poder consulir la api
    getNew(){
        return this.http.get(this.APi)
    }
}