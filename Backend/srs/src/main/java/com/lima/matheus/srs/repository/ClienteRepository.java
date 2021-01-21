package com.lima.matheus.srs.repository;


import com.lima.matheus.srs.domain.Cliente;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepositoryImplementation<Cliente,Integer> {
}
