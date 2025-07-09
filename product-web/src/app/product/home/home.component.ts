import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule,ProductModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private productService:ProductService){}

  products : Product[]=[];

  ngOnInit(): void {
      this.productService.fetchAllProducts().subscribe((data)=>{
        this.products = data;
      })
  }

}
