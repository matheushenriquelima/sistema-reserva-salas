package com.lima.matheus.srs.service;

import com.lima.matheus.srs.domain.Cliente;
import com.lima.matheus.srs.repository.ClienteRepository;
import com.lima.matheus.srs.service.dto.ClienteDTO;
import com.lima.matheus.srs.service.excecao.RegraNegocioException;
import com.lima.matheus.srs.service.mapper.ClienteMapper;
import com.lima.matheus.srs.util.ConstantsUtil;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ClienteService {

    @Autowired
    private ClienteRepository repository;
    private final ClienteMapper mapper;

    public ClienteDTO salvarCliente(ClienteDTO clienteDTO)
    {
        Cliente cliente = repository.save(mapper.toEntity(clienteDTO));
        return mapper.toDto(cliente);
    }

    public List<ClienteDTO> listarClientes(){
        return mapper.toDto(repository.findAll());
    }

    public ClienteDTO obterClientePorId(Integer id){
        Cliente cliente = repository.findById(id).orElseThrow(()-> new RegraNegocioException(ConstantsUtil.CLIENTE_NAO_ENCONTRADO));
        return mapper.toDto(cliente);
    }
    

}
