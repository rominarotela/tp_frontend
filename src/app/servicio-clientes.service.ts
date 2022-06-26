import { Injectable } from '@angular/core';
import {Cliente} from './models/Clientes'
import {ClienteComponent} from "./cliente/cliente.component";
@Injectable({
  providedIn: 'root'
})
export class ServicioClientesService {

  list_clientes: Cliente[];

  constructor() {
    this.list_clientes = [
      {nombreyapellido: "Analia Rotela", ruc:"1", email:"analia@rotela.com"},
      {nombreyapellido: "Felix Vera", ruc:"2", email:"Felix@vera.com"}
    ];
  }

  getClientes(){
    return this.list_clientes;
  }

  addClientes(list: Cliente){
    this.list_clientes.push(list);
  }

  deleteClientes(list: Cliente){
    console.log("ya esta por eliminar", list)
    for (let i = 0; i < this.list_clientes.length; i++){
      if (list == this.list_clientes[i]) {
        console.log("entro al if")
        this.list_clientes.splice(i, 1);
      }
    }
  }
}
