import { ClienteUtil } from './../util/cliente-util';
import { Cliente } from './../../../domain/Cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.inicializarClienteMock();    
  }

  inicializarClienteMock():void {
    const cliente: Cliente = {
      id: 1,
      nome: 'Matheus',
      endereco: 'rua string',
      dataNasc: new Date,
      telefone: '838989898989',
      rg: '12312312',
      cpf: '3121313213',
      email: 'email@email'
    }
    const cliente2: Cliente = {
      id: 2,
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
    //TODO realizar metodo excluir
  }

  novoCliente(){
    this.router.navigate([`clientes/cadastrar`]);
  }

  editarCliente(id:number){
    this.router.navigate([`clientes/editar/`,id]);
  }
}
