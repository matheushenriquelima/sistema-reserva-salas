package com.lima.matheus.srs.service;

import com.lima.matheus.srs.domain.Cliente;
import com.lima.matheus.srs.repository.ClienteRepository;
import com.lima.matheus.srs.service.dto.ClienteDTO;
import com.lima.matheus.srs.service.mapper.ClienteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepositorio;
    private final ClienteMapper clienteMapper;

    public ClienteDTO salvarCliente(ClienteDTO clienteDTO)
    {
        Cliente cliente = clienteRepositorio.save(clienteMapper.toEntity(clienteDTO));
        return clienteMapper.toDto(cliente);
    }
}
