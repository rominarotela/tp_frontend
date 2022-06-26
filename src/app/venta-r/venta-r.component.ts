import { Component, OnInit } from '@angular/core';
import {Cliente} from "../models/Clientes";
import {Venta} from "../models/Ventas";
import {ServicioClientesService} from "../servicio-clientes.service";
import {ServicioVentasService} from "../servicio-ventas.service";

@Component({
  selector: 'app-venta-r',
  templateUrl: './venta-r.component.html',
  styleUrls: ['./venta-r.component.css']
})
export class VentaRComponent implements OnInit {
  list: Venta[];
  item_venta: any;

  constructor(
    public ventaService: ServicioVentasService
  ) { }

  ngOnInit(): void {
    this.list = this.ventaService.getVentas();
  }


}
