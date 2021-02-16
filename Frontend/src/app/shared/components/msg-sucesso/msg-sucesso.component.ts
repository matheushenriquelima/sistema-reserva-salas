import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng';

@Component({
  selector: 'app-msg-sucesso',
  templateUrl: './msg-sucesso.component.html',
  styleUrls: ['./msg-sucesso.component.css']
})
export class MsgSucessoComponent implements OnInit {

  isModalExclusao: boolean;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) {

    if (config.data['fecharModal']) {
      this.isModalExclusao = config.data['fecharModal'];
    }

  }

  ngOnInit(): void {
    this.verificarTipoModal();
  }

  private verificarTipoModal() {
    if (!this.isModalExclusao) {
      setTimeout(() => this.closeModal(), 4000);
    }
  }

  closeModal(value?: any) {
    this.ref.close(value);
  }

}
