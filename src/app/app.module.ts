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
import { VentaRComponent } from './venta-r/venta-r.component';
import { VentaRListarComponent } from './venta-r-listar/venta-r-listar.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FilterComponent } from './filter/filter.component';
import { ButtonVentaComponent } from './button-venta/button-venta.component';
import { ProductoListarComponent } from './producto-listar/producto-listar.component';
import { VentaProductoComponent } from './venta-producto/venta-producto.component';
import { DetalleComponent } from './detalle/detalle.component';

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
    VentaRComponent,
    VentaRListarComponent,
    FilterComponent,
    ButtonVentaComponent,
    ProductoListarComponent,
    VentaProductoComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    FilterPipeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
