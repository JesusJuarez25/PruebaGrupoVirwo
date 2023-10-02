import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { loginService } from "src/app/service/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    //
    loginForm = new FormGroup({
        usename: new FormControl(''),
        pass: new FormControl('')
    })

    respuesta: any
    constructor(private router: Router, private api: loginService) {

    }
    ngOnInit(): void {

    }

    //Metodo para realizar el logeo
    login() {
        //Consumo de la api
        this.api.postLogin(this.form).subscribe(res => {
            console.log(res)
            this.respuesta = res

            console.log(this.respuesta);
            

            //Valida si la se encontro el usuario
            if (this.respuesta[0].Respuesta ===  "USER FOUND") {
                this.router.navigate(['/principal'])
            }
            else if(this.respuesta[0].Respuesta === "USER NO FOUND"){
                alert("Check the data")
            }
            else {
                console.log("error");
            }
            
            
            
            
        })
    }

    sing() {
        this.router.navigate(['/sing'])
    }

    //Metodo para obtener los datos del formalario
    get form() {
        return this.loginForm.value;
    }
}