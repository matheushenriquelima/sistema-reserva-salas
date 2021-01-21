package com.lima.matheus.srs.service.dto;

import com.lima.matheus.srs.domain.Endereco;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ClienteDTO
{
    private String id;
    private String nome;
    private String endereco;
    private Date dataNasc;
    private String telefone;
    private String rg;
    private String cpf;
    private String email;

}
