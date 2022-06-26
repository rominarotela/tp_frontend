import {Component, Input, OnInit} from '@angular/core';
import {Cliente} from "../models/Clientes";
import {Venta} from "../models/Ventas";
import {ServicioClientesService} from "../servicio-clientes.service";
import {ServicioVentasService} from "../servicio-ventas.service";
import {Producto} from "../models/Productos";

@Component({
  selector: 'app-venta-r-listar',
  templateUrl: './venta-r-listar.component.html',
  styleUrls: ['./venta-r-listar.component.css']
})
export class VentaRListarComponent implements OnInit {
  list: Venta[];
  element = false;
  sales = false;
  @Input() item: Cliente;
  @Input() item_venta: Venta;

  constructor(
    public clienteService: ServicioClientesService,
    public ventaService: ServicioVentasService
  ) { }

  ngOnInit(): void {
    this.list = this.ventaService.getVentas();
  }

}
