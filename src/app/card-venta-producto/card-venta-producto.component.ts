import {Component, Input, OnInit} from '@angular/core';
import {Cliente} from "../models/Clientes";
import {Venta} from "../models/Ventas";
import {ServicioClientesService} from "../servicio-clientes.service";
import {ServicioProductosService} from "../servicio-productos.service";
import {ServicioVentasService} from "../servicio-ventas.service";
import {Producto} from "../models/Productos";

@Component({
  selector: 'app-card-venta-producto',
  templateUrl: './card-venta-producto.component.html',
  styleUrls: ['./card-venta-producto.component.css']
})
export class CardVentaProductoComponent implements OnInit {
  element = false;
  sales = false;
  @Input() item: Cliente;
  @Input() item_venta: Venta;

  constructor(
    public clienteService: ServicioClientesService,
    public ventaService: ServicioVentasService
  ) { }

  ngOnInit(): void {
  }

  deleteClientes(item: Cliente){
    if (confirm('¿Estas seguro de eliminar el registro?')){
      this.clienteService.deleteClientes(item);
    }
  }

  putClientes(item: Cliente) {
    this.clienteService.putClientes(item);
    return false
  }

  addVenta(fecha:HTMLInputElement, nrofactura:HTMLInputElement, item:HTMLInputElement, total:HTMLInputElement) {
    console.log("agregando", fecha.value, nrofactura.value, item.value, total.value);
    this.ventaService.addVentas({
      fecha:fecha.value,
      nrofactura:nrofactura.value,
      cliente:item.value,
      total:total.value
    });

  }

  hideData() {
    return (this.element = false);
  }

  salesShow(){
    return (this.sales = true);
  }

}
