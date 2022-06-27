import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../models/Productos";
import {ServicioProductosService} from "../servicio-productos.service";

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  list: Producto[];

  constructor(
    public prdocutoService: ServicioProductosService
  ) { }

  ngOnInit(): void {
    this.list = this.prdocutoService.getProductos();
  }


}
