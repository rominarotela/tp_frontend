import { Injectable } from '@angular/core';
import {Cliente} from './models/Clientes'
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
}
