import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../models/Productos";
import {ServicioProductosService} from "../servicio-productos.service";

@Component({
  selector: 'app-venta-producto',
  templateUrl: './venta-producto.component.html',
  styleUrls: ['./venta-producto.component.css']
})
export class VentaProductoComponent implements OnInit {
  element = false;
  @Input() item: Producto;

  constructor(
    public productoService: ServicioProductosService
  ) { }

  ngOnInit(): void {
  }

  deleteProductos(item: Producto){
    if (confirm('¿Estas seguro de eliminar el registro?')){
      this.productoService.deleteProductos(item);
    }
  }

  putProductos(item: Producto) {
    this.productoService.putProductos(item);
    return false
  }

  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }

  addProductoCliente(){
    console.log("Agregando producto a la factura");
  }

}
