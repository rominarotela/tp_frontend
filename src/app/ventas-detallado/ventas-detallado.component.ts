import { Component, OnInit } from '@angular/core';
import {ServicioClientesService} from "../servicio-clientes.service";
import {ServicioVentasService} from "../servicio-ventas.service";
import {VentaDetalleService} from "../venta-detalle.service";

@Component({
  selector: 'app-ventas-detallado',
  templateUrl: './ventas-detallado.component.html',
  styleUrls: ['./ventas-detallado.component.css']
})
export class VentasDetalladoComponent implements OnInit {

  constructor(
    public ventasdetalleService:VentaDetalleService
  ) { }

  ngOnInit() {

  }


  addVentasDetalle(fecha:HTMLInputElement, nrofactura:HTMLInputElement, cliente:HTMLInputElement, total:HTMLInputElement, detalle:HTMLInputElement) {
    console.log("agregando", fecha.value, nrofactura.value, cliente.value, total.value, detalle.value);
    this.ventasdetalleService.addVentasDetalle({
      fecha: fecha.value,
      nrofactura: nrofactura.value,
      cliente: cliente.value,
      total: total.value,
      detalle: detalle.value
    });
  }

}
