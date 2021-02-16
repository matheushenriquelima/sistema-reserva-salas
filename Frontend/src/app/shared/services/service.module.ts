import { DialogService } from 'primeng/dynamicdialog';
import { NgModule } from '@angular/core';
import { ClienteService } from './cliente.service';
import { CommonModule } from '@angular/common';
import { AlertaService } from '../util/alerta.service';

@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ],
    providers: [ 
        AlertaService,
        ClienteService,
        DialogService
    ]
  })
  export class ServiceModule { }