import { MenuItem } from "primeng";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-srs-menu",
  templateUrl: "./srs-menu.component.html",
  styleUrls: ["./srs-menu.component.css"],
})
export class SrsMenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {label:'Home',icon:'pi pi-home',routerLink:['/']},
      { label: 'Cliente',icon:'pi pi-user' ,routerLink: ['/clientes'] },
      { label: 'Equipamentos',icon:'pi pi-desktop' ,routerLink: ['/equipamentos'] }];
  }
}
