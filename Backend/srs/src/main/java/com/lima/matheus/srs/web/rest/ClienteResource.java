package com.lima.matheus.srs.web.rest;

import com.lima.matheus.srs.service.ClienteService;
import com.lima.matheus.srs.service.dto.ClienteDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@AllArgsConstructor
@CrossOrigin({"*"})
public class ClienteResource {

    public final ClienteService service;

    @PostMapping
    public ResponseEntity<ClienteDTO> salvarCliente(@Validated @RequestBody ClienteDTO clienteDTO) throws URISyntaxException
    {
        return ResponseEntity.created(new URI("/api/clientes")).body(service.salvarCliente(clienteDTO));
    }

    @GetMapping
    public ResponseEntity<List<ClienteDTO>> listarClientes(){
        return ResponseEntity.ok(service.listarClientes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> obterClientePorId(@RequestParam Integer id){
        return ResponseEntity.ok(service.obterClientePorId(id));
    }

}
