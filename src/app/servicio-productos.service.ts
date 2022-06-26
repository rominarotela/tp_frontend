import { Injectable } from '@angular/core';
import {Producto} from "./models/Productos";

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  list_productos: Producto[];

  constructor() {
    this.list_productos = []

  }

  getProductos(){
    if (localStorage.getItem('list_productos') === null) {
      return this.list_productos
    } else {
      // @ts-ignore
      this.list_productos = JSON.parse(localStorage.getItem('list_productos'))
    }
    return this.list_productos;
  }

  addProductos(list: Producto){
    // this.list_productos.push(list);
    this.list_productos.push(list)
    let list_productos: Producto[] = [];
    if (localStorage.getItem('list_productos') === null){
      list_productos.push(list);
      localStorage.setItem('list_productos', JSON.stringify(list_productos));
    } else {
      // @ts-ignore
      list_productos = JSON.parse(localStorage.getItem('list_productos'));
      list_productos.push(list);
      localStorage.setItem('list_productos', JSON.stringify(list_productos))
    }
  }

  deleteProductos(list: Producto){
    for (let i = 0; i < this.list_productos.length; i++){
      if (list == this.list_productos[i]) {
        this.list_productos.splice(i, 1);
        localStorage.setItem('list_productos', JSON.stringify(this.list_productos));
      }
    }
  }

  putProductos(list: Producto){
    for (let i = 0; i < this.list_productos.length; i++){
      if (list == this.list_productos[i]) {
        localStorage.setItem('list_productos', JSON.stringify(this.list_productos));
        console.log("encontro el registro", list, this.list_productos[i]);
      }
    }
  }


}
