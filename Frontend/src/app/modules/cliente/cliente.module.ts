import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './consulta-cliente/cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormClienteComponent } from './form-cliente/form-cliente.component';



@NgModule({
  declarations: [ClienteComponent, FormClienteComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ],
  providers: []
})
export class ClienteModule { }
