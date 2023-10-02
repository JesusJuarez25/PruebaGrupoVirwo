import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { singinService } from "src/app/service/singin.service";

@Component({
    selector: 'app-sing',
    templateUrl: './sing.componet.html',
    styleUrls: ['./sing.componet.css']
})

export class SingComponent implements OnInit {

    respuesta: any

    singForm = new FormGroup({
        usename: new FormControl(''),
        email: new FormControl(''),
        pass: new FormControl('')
    })

    constructor(private router: Router, private api: singinService) {

    }

    ngOnInit(): void {

    }

    //Metodo para realizar crear un numero usuario
    sing() {
        this.api.postSingin(this.form).subscribe(res => {
            console.log(res);
            this.respuesta = res;

            if (this.respuesta[0].Respuesta === "THE COUNT WAS CREATED") {
                alert("The count was created");
                this.router.navigate(['/login'])
            }
            else {
                alert("The username or password exists");
            }

        })

    }

    login() {
        this.router.navigate(['/login'])
    }

    //Metodo para obtener los datos del formalario
    get form() {
        return this.singForm.value;
    }

}
