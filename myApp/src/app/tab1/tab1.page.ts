import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    function validar(){
      var nombre = document.getElementById("nombre").nodeValue;
      var apellido = document.getElementById("apellido").nodeValue;
      var correo = document.getElementById("correo").nodeValue;
      var clave = document.getElementById("clave").nodeValue;
      var expresion = /\w+@\w+\.+[a-z]/;
  
      if(nombre == "" || apellido == "" || correo == "" || clave == ""){
          alert("Campos están vacío");
          return false;
      }
      else if(nombre.length > 30){
          alert("El nombre es muy largo");
          return false;
      }
      else if(apellido.length > 80){
          alert("El apellidos es muy largo");
          return false;
      }
      else if(correo.length > 20){
          alert("El correo debe tener 20 caracteres como máximo");
          return false;
      }
      else if(!expresion.test(correo)){
          alert("el correo no es válido")
      }
      else(clave.length > 20);
          alert("La clave debe tener 20 caracteres como máximo");
          return false;
      
   }
  }  

}
