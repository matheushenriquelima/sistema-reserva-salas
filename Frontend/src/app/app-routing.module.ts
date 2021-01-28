import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiarioErrosComponent } from "./components/diario-erros/diario-erros.component";
import { LoginSuccessComponent } from "@nuvem/angular-base";
import { ClienteModule } from "./modules/cliente/cliente.module";

const routes: Routes = [
  {
    path: "diario-erros",
    component: DiarioErrosComponent,
    data: { breadcrumb: "Diário de Erros" },
  },
  { path: "login-success", component: LoginSuccessComponent },
  { path: "clientes", loadChildren: () => ClienteModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
