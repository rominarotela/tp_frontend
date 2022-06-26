import { Component, OnInit } from '@angular/core';
import {Cliente} from "../models/Clientes";
import {ServicioClientesService} from "../servicio-clientes.service";

@Component({
  selector: 'app-ventas-productos',
  templateUrl: './ventas-productos.component.html',
  styleUrls: ['./ventas-productos.component.css']
})
export class VentasProductosComponent implements OnInit {
  list: Cliente[];

  constructor(
    public clienteService: ServicioClientesService
  ) { }

  ngOnInit(): void {
    this.list = this.clienteService.getClientes();
  }

}
