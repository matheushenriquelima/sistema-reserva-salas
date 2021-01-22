import { MenuItem } from "primeng";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-administracao",
  templateUrl: "./administracao.component.html",
  styleUrls: ["./administracao.component.css"],
})
export class AdministracaoComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Administracao",
        icon: "pi pi-users",
        items: [
          { label: "Cliente", icon: "pi pi-user", routerLink: ["/clientes"] },
        ],
      },
    ];
  }
}
