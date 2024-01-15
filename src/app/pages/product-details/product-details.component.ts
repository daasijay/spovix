import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  productId!: number;
  productDetails!: Product;
  
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router:Router,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(val => {
      this.productId = val['id'];
      this.fetchProductDetails(this.productId);
    });
  }

  fetchProductDetails(productId: number) {
    this.api.getProductById(productId)
      .subscribe({
        next: (res) => {
          this.productDetails = res;
          //console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }



}
