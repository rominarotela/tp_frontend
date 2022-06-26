import { Component, OnInit, Input } from '@angular/core';
import {Cliente} from "../models/Clientes";

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css']
})
export class CardClienteComponent implements OnInit {

  @Input() item: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
