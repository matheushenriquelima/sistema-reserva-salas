package com.lima.matheus.srs.service.mapper;


import com.lima.matheus.srs.domain.Cliente;
import com.lima.matheus.srs.service.dto.ClienteDTO;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ClienteMapper extends EntityMapper<ClienteDTO, Cliente>
{
}
