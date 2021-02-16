import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClienteComponent } from "./consulta-cliente/cliente.component";

const routes: Routes = [{ path: '', component: ClienteComponent },
{ path: 'cadastrar', component: FormClienteComponent },
{ path: 'editar/:id', component: FormClienteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule { }
