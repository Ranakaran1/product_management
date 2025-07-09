package com.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.entity.Product;
import com.product.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        List<Product> li =  (List<Product>)productRepository.findAll();
        return li;
    }

    @Override
    public Product getById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);

    }

    @Override
    public Product updateProduct(Product product, Long id) {
        Product prod = productRepository.findById(id).get();
        if(product!=null){
            prod.setBrand(product.getBrand());
            prod.setName(product.getName());
            prod.setType(product.getType());

        }
        return productRepository.save(prod);
    }

    @Override
    public String deleteProduct(Long Id) {
        Product prod = productRepository.findById(Id).get();
        String message= "Can't delete product";
        if(prod!=null){
            productRepository.delete(prod);
            message = "Product deleted successfully with product ID: " + Id;
        }
        return message;

    }


}
