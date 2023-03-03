package com.digitazon.demojpa.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.digitazon.demojpa.model.Prodotto;
import com.digitazon.demojpa.service.ProdottoService;

@RestController
@CrossOrigin
@RequestMapping("/api/prodotti")
public class ProdottoController {
    @Autowired
    ProdottoService prodottoService;

    @GetMapping("/all")
    public ResponseEntity<List<Prodotto>> getAllProdotti() {
        return new ResponseEntity<>(prodottoService.getAllProdotti(), HttpStatus.OK);
    }

}
