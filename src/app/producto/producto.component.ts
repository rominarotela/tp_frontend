import { Component, OnInit } from '@angular/core';
import {Producto} from "../models/Productos";
import {ServicioProductosService} from "../servicio-productos.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  list: Producto[];

  constructor(
    public prdocutoService: ServicioProductosService
  ) { }

  ngOnInit(): void {
    this.list = this.prdocutoService.getProductos();
  }


}
