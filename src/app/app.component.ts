import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ventas-productos-clientes';

  constructor() {
    this.grabar_localstorage();
  }

  grabar_localstorage(){
    // let nombre = "Romina";

    let cliente_A = {
      nombre: "Romina",
      apellido: "Rotela"
    }

    localStorage.setItem("cliente", JSON.stringify(cliente_A));
  }

  // obtener_localstorage(){
  //   let cliente_A = localStorage.getItem("cliente_A")
  // }
}
