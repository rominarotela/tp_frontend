import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClientesComponent} from "./clientes/clientes.component";
import { ClienteComponent } from './cliente/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasProductosComponent } from './ventas-productos/ventas-productos.component';
import { VentasResumidoComponent } from './ventas-resumido/ventas-resumido.component';
import { VentasDetalladoComponent } from './ventas-detallado/ventas-detallado.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ServicioClientesService} from "./servicio-clientes.service";
import { CardClienteComponent } from './card-cliente/card-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { CardProductoComponent } from './card-producto/card-producto.component';
import { CardVentaProductoComponent } from './card-venta-producto/card-venta-producto.component';

const appRoutes: Routes=[
  {path: '', component: ClientesComponent},
  {path:'productos', component: ProductosComponent},
  {path: 'ventas-productos', component: VentasProductosComponent},
  {path: 'ventas-resumido', component: VentasResumidoComponent},
  {path: 'ventas-detallado', component: VentasDetalladoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteComponent,
    ProductosComponent,
    VentasProductosComponent,
    VentasResumidoComponent,
    VentasDetalladoComponent,
    CardClienteComponent,
    EditClienteComponent,
    ProductoComponent,
    CardProductoComponent,
    CardVentaProductoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
