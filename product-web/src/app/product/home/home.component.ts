import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ProductModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private productService:ProductService,private router:Router){}

  products : Product[]=[];
  filteredProd : Product[]=[];

  ngOnInit(): void {
      this.fetchProduct()
  }
  fetchProduct(){
    this.productService.fetchAllProducts().subscribe((data)=>{
        this.products = [...data];
        this.filteredProd= [...data];
      })
  }
  logClick(): void {
    console.log('Clicked!');
  }

  delete(id:number | undefined){
    if (id === undefined) return;
    const isConfirmed = window.confirm("are you sure deleting?");
    if(isConfirmed){
      this.productService.delete(id).subscribe(() => {
          this.products = this.products.filter(item=>item.id!= id);
      });
      window.location.reload();
    }
    
  }

  filterProducts(input: string): void {
  if (!input.trim()) {
    this.filteredProd = [...this.products];
    return;
  }

  const keyword = input.toLowerCase();
  this.filteredProd = this.products.filter(item =>
    item.name.toLowerCase().includes(keyword) ||
    item.type.toLowerCase().includes(keyword) ||
    item.brand.toLowerCase().includes(keyword)
  );
}



}
