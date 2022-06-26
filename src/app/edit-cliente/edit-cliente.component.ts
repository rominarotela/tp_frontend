import {Component, Input, OnInit} from '@angular/core';
import {ServicioClientesService} from "../servicio-clientes.service";
import {ClienteComponent} from "../cliente/cliente.component";
import {Cliente} from "../models/Clientes";

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {
  list: Cliente[];

  constructor(
    public clienteService: ServicioClientesService
  ) { }

  ngOnInit(): void {
    this.list = this.clienteService.getClientes();
  }
  putClientes(item: Cliente) {
    console.log("editando", item);
    this.clienteService.putClientes(item);
  }

}
