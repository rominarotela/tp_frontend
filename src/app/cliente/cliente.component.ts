import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  // nombre="Romina";
  apellido="Rotela";
  private ruc=4598900-1;
  email="romy@rotela.com";
  nombre: any;

  getRuc(){
    return this.ruc;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
