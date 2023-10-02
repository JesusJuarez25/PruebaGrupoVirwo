import { Component, OnInit } from "@angular/core";
import { GetNews } from "src/app/service/news.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-principal',
    templateUrl: './principal.componet.html',
    styleUrls: ['./principal.componet.css']
})

export class PrincipalComponent implements OnInit {

    //Vartiables para poder guadar el arreglo
    news: any
    new: any

    //Variable para el filtro de busqueda
    searchText: any;

    constructor(private api: GetNews, private router:Router) {

    }
    ngOnInit(): void {
        this.api.getNew().subscribe(data => {

            //Pase el Objeto que viene del EndPoint a un arreglo
            this.news = Object.values(data)

            console.log(this.news)
            //Se recorre el arreglo para poder mostrar las notiacias 
            this.new = this.news[2]
        })
    }

    //Metodo para finalizar sesion
    logout(){
        this.router.navigate(['/login'])
    }
}
