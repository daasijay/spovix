import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ConfirmationService, MessageService]
})

export class ProductsComponent implements OnInit {

  products: any;
  categories: any;


  constructor(private api:ApiService, private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  /* confirmDelete() {
    this.confirmationService.confirm({
        header: 'Are you want to delete?',
        message: 'Please confirm to proceed.',
        accept: () => {
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Deleted Successfully', life: 3000 });
        },
        // reject: () => {
        //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        // }
    });
  } */
  
  

  getProducts() {
    this.api.getProducts().subscribe(res =>{
      console.log(res);
      this.products = res;
    });
  }

  deleteProduct(id: number) {
    this.confirmationService.confirm({
        header: 'Are you want to delete?',
        message: 'Please confirm to proceed.',
        accept: () => {
          this.api.deleteProduct(id).subscribe(res =>{
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Deleted Successfully', life: 3000 });
            this.getProducts();
          })

        },

        // reject: () => {
        //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        // }
    });

  }

  getCategories() {
    this.api.getCategories().subscribe(res =>{
      console.log(res);
      this.categories = res;
    });
  }

}
