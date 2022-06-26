import { Component, OnInit } from '@angular/core';
import {ServicioClientesService} from "../servicio-clientes.service";
import {Cliente} from "../models/Clientes";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  list: Cliente[];

  constructor(
    public clienteService: ServicioClientesService
  ) { }

  ngOnInit(): void {
    this.list = this.clienteService.getClientes();
  }


}
