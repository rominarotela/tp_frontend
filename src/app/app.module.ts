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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
