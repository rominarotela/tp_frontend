import { Component, OnInit } from '@angular/core';
import {Cliente} from "../models/Clientes";
import {ServicioClientesService} from "../servicio-clientes.service";
import {VentasDetalle} from "../models/VentasDetalle";
import {VentaDetalleService} from "../venta-detalle.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  list: VentasDetalle[];

  constructor(
    public ventasdetalleService: VentaDetalleService
  ) { }

  ngOnInit(): void {
    this.list = this.ventasdetalleService.getVentasDetalle();
  }


}
