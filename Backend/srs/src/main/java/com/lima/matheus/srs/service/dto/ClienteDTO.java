package com.lima.matheus.srs.service.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.time.LocalDate;


@Getter
@Setter
public class ClienteDTO
{
    private String id;

    @NotNull
    @Size(max=120)
    private String nome;

    @NotNull
    private String endereco;

    @NotNull
    private LocalDate dataNasc;

    @NotNull
    @Size(max = 11, min = 11)
    private String telefone;

    @NotNull
    @Size(max = 7, min = 7)
    private String rg;

    @NotNull
    @CPF
    private String cpf;

    @NotNull
    @Email
    private String email;

}
