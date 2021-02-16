import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MsgSucessoComponent } from '../components/msg-sucesso/msg-sucesso.component';
import { MsgErroComponent } from '../components/msg-erro/msg-erro.component';

export class AcaoAlerta {
  static CADASTRO = 'cadastrado(a)';
  static ALTERACAO = 'alterado(a)';
  static REMOCAO = 'removido(a)';
  static DESASSOCIACAO = 'desassociado';
}

@Injectable()
export class AlertaService {

  static SUCESSO = 'com sucesso.';
  ref: DynamicDialogRef;

  constructor(
    private messageService: MessageService,
    public dialogService: DialogService,
  ) { }

  sucesso(funcionalidade: string, tipo: AcaoAlerta) {
    const mensagem = `${funcionalidade} ${tipo} ${AlertaService.SUCESSO}`;
    this.messageService.add({ severity: 'success', summary: mensagem });
  }

  erro(mensagem: string) {
    this.messageService.add({
      severity: 'error', summary: 'Erro', detail: mensagem
    });
  }

  sucessoCustom(funcionalidade: string, tipo: AcaoAlerta, legenda?: string) {
    const mensagem = `${funcionalidade} ${tipo} ${AlertaService.SUCESSO}`;
    this.ref = this.dialogService.open(MsgSucessoComponent, {
      width: '698px',
      height: '400px',
      contentStyle: { 'overflow': 'auto' },
      baseZIndex: 10000,
      showHeader: false,
      data: { mensagem, legenda }
    });

    return this.ref.onClose;
  }

  erroCustom(mensagem: string) {
    this.ref = this.dialogService.open(MsgErroComponent, {
      width: '698px',
      height: '180px',
      contentStyle: { 'overflow': 'auto' },
      baseZIndex: 10000,
      showHeader: false,
      data: { mensagem }
    });
  }


  sucessoExclusao(funcionalidade: string, tipo: AcaoAlerta, legenda?: string) {
    const fecharModal = true;
    const mensagem = `${funcionalidade} ${tipo} ${AlertaService.SUCESSO}`;
    this.ref = this.dialogService.open(MsgSucessoComponent, {
      width: '698px',
      height: '400px',
      closable:false,
      contentStyle: { 'overflow': 'auto' },
      baseZIndex: 10000,
      showHeader: false,
      data: { mensagem, legenda, fecharModal }
    });

    return this.ref.onClose;
  }

}
