import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private api:ApiService,private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.api.getCategories().subscribe(res =>{
      console.log(res);
      this.categories = res;
    });
  }

  deleteCategory(id: number) {
    this.confirmationService.confirm({
        header: 'Are you want to delete this category?',
        message: 'Please confirm to proceed.',
        accept: () => {
          this.api.deleteCategory(id).subscribe(res =>{
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Deleted Successfully', life: 3000 });
            this.getCategories();
          })

        },

        // reject: () => {
        //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        // }
    });

  } 

}
