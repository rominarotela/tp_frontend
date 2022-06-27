import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../models/Productos";
import {ServicioProductosService} from "../servicio-productos.service";

@Component({
  selector: 'app-button-venta',
  templateUrl: './button-venta.component.html',
  styleUrls: ['./button-venta.component.css']
})
export class ButtonVentaComponent implements OnInit {
  @Input() item: Producto;
  element = false;
  constructor(
    public productoService:ServicioProductosService
  ) { }

  ngOnInit(): void {
  }

  putProductos(item: Producto) {
    this.productoService.putProductos(item);
    return (this.element = false);
  }

  hideData() {
    console.log("esconder button")
    return (this.element = false);
  }
}
