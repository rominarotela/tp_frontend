import {Component, OnInit} from "@angular/core";
import {ServicioClientesService} from '../servicio-clientes.service'
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  constructor(
    public clienteService:ServicioClientesService
  ) { }

  ngOnInit() {

  }


  addCliente(nombreyapellido:HTMLInputElement, ruc:HTMLInputElement, email:HTMLInputElement) {
    console.log("agregando", nombreyapellido.value, ruc.value, email.value);
    this.clienteService.addClientes({
      nombreyapellido:nombreyapellido.value,
      ruc:ruc.value,
      email:email.value
    });
  }

}
