import { Injectable } from '@angular/core';
import {Cliente} from './models/Clientes'
import {ClienteComponent} from "./cliente/cliente.component";
@Injectable({
  providedIn: 'root'
})
export class ServicioClientesService {

  list_clientes: Cliente[];

  constructor() {
    this.list_clientes = []
    // this.list_clientes = [
    //   {nombreyapellido: "Analia Rotela", ruc:"1", email:"analia@rotela.com"},
    //   {nombreyapellido: "Felix Vera", ruc:"2", email:"Felix@vera.com"}
    // ];
  }

  getClientes(){
    // localStorage.getItem('list_clientes')
    if (localStorage.getItem('list_clientes') === null) {
      return this.list_clientes
    } else {
      // @ts-ignore
      this.list_clientes = JSON.parse(localStorage.getItem('list_clientes'))
    }
    return this.list_clientes;
  }

  addClientes(list: Cliente){
    // this.list_clientes.push(list);
    this.list_clientes.push(list)
    let list_clientes: Cliente[] = [];
    if (localStorage.getItem('list_clientes') === null){
      list_clientes.push(list);
      localStorage.setItem('list_clientes', JSON.stringify(list_clientes));
    } else {
      // @ts-ignore
      list_clientes = JSON.parse(localStorage.getItem('list_clientes'));
      list_clientes.push(list);
      localStorage.setItem('list_clientes', JSON.stringify(list_clientes))
    }
  }

  deleteClientes(list: Cliente){
    for (let i = 0; i < this.list_clientes.length; i++){
      if (list == this.list_clientes[i]) {
        this.list_clientes.splice(i, 1);
        localStorage.setItem('list_clientes', JSON.stringify(this.list_clientes));
      }
    }
  }
}
