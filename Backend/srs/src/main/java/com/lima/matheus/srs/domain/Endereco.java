package com.lima.matheus.srs.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "TB_ENDERECO")
@Getter
@Setter
public class Endereco implements Serializable {

    private static final long serialVersionUID = -1026853392736900563L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_ENDERECO")
    @SequenceGenerator(sequenceName = "SQ_ENDERECO", name = "SQ_ENDERECO", allocationSize = 1)
    @Column(name = "CO_ENDERECO")
    private Long id;

    @Column(name = "NO_CEP", nullable = false)
    private String cep;

    @Column(name = "NO_LOGRADOURO", nullable = false)
    private String logradouro;

    @Column(name = "NO_NUMERO")
    private String numero;

    @Column(name = "NO_COMPLEMENTO", nullable = false)
    private String complemento;

    @Column(name = "NO_BAIRRO", nullable = false)
    private String bairro;

    @Column(name = "NO_MUNICIPIO", nullable = false)
    private String municipio;

    @Column(name = "NO_UF", nullable = false)
    private String uf;

}
