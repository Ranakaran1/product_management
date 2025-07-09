import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  product: Product ={
    id:undefined,
    name :'',
    type:'',
    brand:''
  }

  constructor(private productService: ProductService,private router:Router){}

  create(){
    this.productService.create(this.product).subscribe({
      next:(data)=>{
        this.router.navigate(["product/home"]);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  cancel(){
     this.router.navigate(["product/home"]);
  }

}
