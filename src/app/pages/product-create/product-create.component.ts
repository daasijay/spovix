import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})


export class ProductCreateComponent implements OnInit{

  categories: any;

  public productCreateForm!: FormGroup;

  constructor(private fb:FormBuilder, private api:ApiService) {}


  ngOnInit(): void {
      this.productCreateForm = this.fb.group({
        name: [""],
        description: [""],
        categoryId: [""]
      });
      this.getCategories();
  }


  createProduct() {
      this.api.createProduct(this.productCreateForm.value).subscribe(res=>{
        alert("Product has been inserted");
        this.productCreateForm.reset();
      });
  }

  getCategories() {
    this.api.getCategories().subscribe(data =>{
      console.log(data);
      this.categories = data;
    });
  }

 



}
