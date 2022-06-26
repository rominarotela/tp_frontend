import { Injectable } from '@angular/core';
import {Venta} from "./models/Ventas";

@Injectable({
  providedIn: 'root'
})
export class ServicioVentasService {
  list_ventas: Venta[];

  constructor() {
    this.list_ventas = []

  }

  getVentas(){
    if (localStorage.getItem('list_ventas') === null) {
      return this.list_ventas
    } else {
      // @ts-ignore
      this.list_ventas = JSON.parse(localStorage.getItem('list_ventas'))
    }
    return this.list_ventas;
  }

  addVentas(list: Venta){
    // this.list_ventas.push(list);
    this.list_ventas.push(list)
    let list_ventas: Venta[] = [];
    if (localStorage.getItem('list_ventas') === null){
      list_ventas.push(list);
      localStorage.setItem('list_ventas', JSON.stringify(list_ventas));
    } else {
      // @ts-ignore
      list_ventas = JSON.parse(localStorage.getItem('list_ventas'));
      list_ventas.push(list);
      localStorage.setItem('list_ventas', JSON.stringify(list_ventas))
    }
  }

  deleteVentas(list: Venta){
    for (let i = 0; i < this.list_ventas.length; i++){
      if (list == this.list_ventas[i]) {
        this.list_ventas.splice(i, 1);
        localStorage.setItem('list_ventas', JSON.stringify(this.list_ventas));
      }
    }
  }

  putVentas(list: Venta){
    for (let i = 0; i < this.list_ventas.length; i++){
      if (list == this.list_ventas[i]) {
        localStorage.setItem('list_ventas', JSON.stringify(this.list_ventas));
        console.log("encontro el registro", list, this.list_ventas[i]);
      }
    }
  }


}
