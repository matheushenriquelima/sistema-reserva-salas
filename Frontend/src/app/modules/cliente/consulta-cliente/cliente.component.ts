import { ClienteUtil } from './../util/cliente-util';
import { Cliente } from './../../../domain/Cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes : any[] = [];
  colunas =  ClienteUtil.COLUNAS_PADRAO;
  clienteOptions: Cliente[] = [];
  clienteFilter = new Cliente();

  constructor() { }

  ngOnInit(): void {
    this.inicializarClienteMock();    
  }

  inicializarClienteMock():void {
    const cliente: Cliente = {
      id: null,
      nome: 'Matheus',
      endereco: 'rua string',
      dataNasc: new Date,
      telefone: '838989898989',
      rg: '12312312',
      cpf: '3121313213',
      email: 'email@email'
    }
    const cliente2: Cliente = {
      id: null,
      nome: 'Ana',
      endereco: 'rua sol',
      dataNasc: new Date,
      telefone: '838989898989',
      rg: '72312312',
      cpf: '3121313213',
      email: 'email@email'
    }
    this.clientes[0] = cliente;
    this.clientes[1] = cliente2;
  }

  validarExcluir(id:number){
    return null;
  }

  novoCliente(){
    
  }

}
