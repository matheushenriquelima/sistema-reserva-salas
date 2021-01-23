import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClienteComponent } from "./consulta-cliente/cliente.component";

const routes: Routes = [{path: '', component: ClienteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
