import { Component, OnInit, Input } from '@angular/core';
import {Cliente} from "../models/Clientes";
import {ServicioClientesService} from "../servicio-clientes.service";
import {ClienteComponent} from "../cliente/cliente.component";

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css']
})
export class CardClienteComponent implements OnInit {

  @Input() item: Cliente;

  constructor(
    public clienteService: ServicioClientesService
  ) { }

  ngOnInit(): void {
  }

  deleteClientes(item: Cliente){
    if (confirm('¿Estas seguro de eliminar el registro?')){
      this.clienteService.deleteClientes(item);
    }
  }

}
