import { Injectable } from '@angular/core';
import {Cliente} from "./models/Clientes";
import {VentasDetalle} from "./models/VentasDetalle";

@Injectable({
  providedIn: 'root'
})
export class VentaDetalleService {

  list_ventadetalle: VentasDetalle[];

  constructor() {
    this.list_ventadetalle = []
  }

  getVentasDetalle() {
    // localStorage.getItem('list_clientes')
    if (localStorage.getItem('list_clientes') === null) {
      return this.list_ventadetalle
    } else {
      // @ts-ignore
      this.list_clientes = JSON.parse(localStorage.getItem('list_clientes'))
    }
    return this.list_ventadetalle;
  }

  addVentasDetalle(list: VentasDetalle) {
    // this.list_clientes.push(list);
    this.list_ventadetalle.push(list)
    let list_ventadetalle: VentasDetalle[] = [];
    if (localStorage.getItem('list_ventadetalle') === null) {
      list_ventadetalle.push(list);
      localStorage.setItem('list_ventadetalle', JSON.stringify(list_ventadetalle));
    } else {
      // @ts-ignore
      list_ventadetalle = JSON.parse(localStorage.getItem('list_ventadetalle'));
      list_ventadetalle.push(list);
      localStorage.setItem('list_ventadetalle', JSON.stringify(list_ventadetalle))
    }
  }
}
