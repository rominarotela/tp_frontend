import { Component, OnInit } from '@angular/core';
import {ServicioProductosService} from "../servicio-productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(
    public productoService:ServicioProductosService
  ) { }

  ngOnInit() {

  }


  addProducto(codigo:HTMLInputElement, nombre:HTMLInputElement, precioventa:HTMLInputElement, existencia:HTMLInputElement) {
    console.log("agregando", codigo.value, nombre.value, precioventa.value, existencia.value);
    this.productoService.addProductos({
      codigo:codigo.value,
      nombre:nombre.value,
      precioventa:precioventa.value,
      existencia:existencia.value
    });
  }

}
