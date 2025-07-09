package com.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.entity.Product;
import com.product.service.ProductService;

@CrossOrigin(maxAge = 3360, origins = "http://localhost:4200")
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/api/v1/products")
    public ResponseEntity<List<Product>> fetchAllProduct(){
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/api/v1/products/{id}")
    public ResponseEntity<Product> fetchProduct(@PathVariable("id") Long id){
        return ResponseEntity.ok(productService.getById(id) );
    }

    @PostMapping("/api/v1/products")
    public ResponseEntity<Product> create(@RequestBody Product product){
        System.out.println("Received Product: " + product);
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @PutMapping("/api/v1/products/{id}")
    public ResponseEntity<Product> updateProd(@RequestBody Product product,@PathVariable("id") Long id){
        return ResponseEntity.ok(productService.updateProduct(product,id));
    }

    
    @DeleteMapping("/api/v1/products/{id}")
    public ResponseEntity<String> deleteProd(@PathVariable("id") Long id){
        return ResponseEntity.ok(productService.deleteProduct(id));
    }

}
