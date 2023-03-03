package com.digitazon.demojpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.digitazon.demojpa.model.Prodotto;

public interface ProdottoRepository extends JpaRepository<Prodotto, Long> {
}
