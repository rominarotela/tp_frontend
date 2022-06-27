import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../models/Productos";
import {ServicioProductosService} from "../servicio-productos.service";
import {VentaDetalleService} from "../venta-detalle.service";

@Component({
  selector: 'app-venta-producto',
  templateUrl: './venta-producto.component.html',
  styleUrls: ['./venta-producto.component.css']
})
export class VentaProductoComponent implements OnInit {
  element = false;
  @Input() item: Producto;

  constructor(
    public productoService: ServicioProductosService,
    public ventasdetalleService: VentaDetalleService
  ) {
  }

  ngOnInit(): void {
  }

  deleteProductos(item: Producto) {
    if (confirm('¿Estas seguro de eliminar el registro?')) {
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

  // addProductoCliente(){
  //   console.log("Agregando producto a la factura");
  // }

  addVentasDetalle(fecha: HTMLInputElement, nrofactura: HTMLInputElement, cliente: HTMLInputElement, total: HTMLInputElement, detalle: HTMLInputElement) {
    console.log("agregando", fecha.value, nrofactura.value, cliente.value, total.value, detalle.value);
    this.ventasdetalleService.addVentasDetalle({
      fecha: fecha.value,
      nrofactura: nrofactura.value,
      cliente: cliente.value,
      total: total.value,
      detalle: detalle.value
    });
  }

  // addProductoCliente(fecha: HTMLInputElement, nrofactura: HTMLInputElement, cliente: HTMLInputElement, total: HTMLInputElement) {
  //   console.log("agregando", fecha.value, nrofactura.value, cliente.value, total.value);
  //   this.ventasdetalleService.addVentasDetalle({
  //     fecha: fecha.value,
  //     nrofactura: nrofactura.value,
  //     cliente: cliente.value,
  //     total: total.value,
  //     detalle: null
  //   });
  // }

}
