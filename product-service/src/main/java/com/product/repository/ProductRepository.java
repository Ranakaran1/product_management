package com.product.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.product.entity.Product;

@Service
public interface ProductRepository extends CrudRepository<Product,Long> {


}
