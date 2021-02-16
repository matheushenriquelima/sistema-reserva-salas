import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/domain/Cliente';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  resourceUrl = environment.apiUrl + '/clientes/';

  constructor(private httpClient: HttpClient) { }

  salvar(cliente: Cliente): Observable<any> {
    return this.httpClient.post(this.resourceUrl, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.httpClient.put(this.resourceUrl, cliente);
  }

}
