package com.lima.matheus.srs.repository;


import com.lima.matheus.srs.domain.Cliente;
import com.lima.matheus.srs.service.dto.ClienteDTO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepositoryImplementation<Cliente,Integer> {

    @Query(value = "SELECT CASE WHEN count(c) > 0 THEN null ELSE true END "
            + " FROM Cliente c WHERE (c.cpf = :#{#clienteDTO.cpf}"
            + " OR c.email LIKE LOWER(concat('%', :#{#clienteDTO.email},'%'))"
            + "OR (c.rg = :#{#clienteDTO.rg}))"
            + " AND (:#{#clienteDTO.id} IS NULL OR c.id != :#{#clienteDTO.id})")
    Optional<Boolean> findIdsByCpfOrEmailOrRg(@Param("clienteDTO") ClienteDTO clienteDTO);
}
