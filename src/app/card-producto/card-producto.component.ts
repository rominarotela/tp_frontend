import {Component, Input, OnInit} from '@angular/core';
import {ServicioProductosService} from "../servicio-productos.service";
import {Producto} from "../models/Productos";

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
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

}
