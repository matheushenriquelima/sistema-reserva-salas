import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { MensagemValidacaoUtil } from 'src/app/shared/util/mensagem-validacao';
import { MensagensUtil } from 'src/app/shared/util/mensagens-util';
import { Cliente } from './../../../domain/Cliente';
import { ClienteService } from './../../../shared/services/cliente.service';
import { AcaoAlerta, AlertaService } from './../../../shared/util/alerta.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  form: FormGroup;
  cliente = new Cliente();

  constructor(
    private alertaService: AlertaService,
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      dataNasc: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      rg: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required]]
    })
  }

  salvar(): void {
    MensagemValidacaoUtil.validarTodosCamposDoForm(this.form);
    console.log(this.cliente);
    if (this.form.valid) {
      this.blockUI.start(MensagensUtil.SALVANDO);
      this.obterRequisicao().pipe(finalize(() => this.blockUI.stop())).subscribe(
        () => {
          this.exibirAlertaSucesso();
          this.cancelar();
        }, error => {
          this.alertaService.erroCustom(error.error.detail);
        });
    }
  }

  private removeMask(cliente: Cliente) {
    let clienteNovo: Cliente = cliente;
    clienteNovo.cpf = cliente.cpf?.replace('.', '')?.replace('.', '')?.replace('-', '');
    clienteNovo.rg = cliente.rg?.replace('.', '')?.replace('.', '');
    clienteNovo.telefone = cliente.telefone?.replace('(', '')?.replace(')', '')?.replace('-', '');
    return clienteNovo;
  }

  private obterRequisicao() {
    const cliente : Cliente = this.removeMask(this.cliente);
    if (cliente.id) {
      return this.clienteService.atualizar(cliente);
    }
    return this.clienteService.salvar(cliente);
  }

  private exibirAlertaSucesso(): void {
    let retornoDialog: any;
    if (!this.cliente.id) {
      retornoDialog = this.alertaService.sucessoCustom(MensagensUtil.CLIENTE, AcaoAlerta.CADASTRO);
    } else {
      retornoDialog = this.alertaService.sucessoCustom(MensagensUtil.CLIENTE, AcaoAlerta.ALTERACAO);
    }
    retornoDialog.subscribe((res: any) => {
      if (res) {
        this.cancelar();
      }
    });
  }

  mapearMensagemErroCampo(campo: string, campoControl: AbstractControl): string {
    return MensagemValidacaoUtil.construirMensagem(campo, campoControl);
  }

  cancelar(): void {
    this.router.navigate(['clientes']);
  }


}
