import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AttributesComponent implements OnInit{

  attributes: any;

  constructor(private api:ApiService,private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAttributes();
  }

  getAttributes() {
    this.api.getAttributes().subscribe(res =>{
      console.log(res);
      this.attributes = res;
    });
  }

  deleteAttribute(id: number) {
    this.confirmationService.confirm({
        header: 'Are you want to delete?',
        message: 'Please confirm to proceed.',
        accept: () => {
          this.api.deleteAttribute(id).subscribe(res =>{
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Deleted Successfully', life: 3000 });
            this.getAttributes();
          })

        },

        // reject: () => {
        //     this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        // }
    });

  }
  

}
