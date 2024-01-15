import { Component,OnInit } from '@angular/core';
import {NodeService} from '../service/node.service';
import {TreeNode} from 'primeng/api';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  files: TreeNode[] = [];
  cols: any[] = [];

  constructor(private api:ApiService,private nodeService: NodeService) {}

  ngOnInit(): void {

      // this.nodeService.getFilesystem().then(files => this.files = files);

      // console.log(this.nodeService);

      // this.cols = [
      //     { field: 'name', header: 'Name' },
      //     { field: 'size', header: 'Size' },
      //     { field: 'type', header: 'Type' }
      // ];
      //this.getFilesystem();
      this.getcats();
     
  }




  // getFilesystem() {
  //     // this.api.getcats().subscribe(res =>{
  //     //   console.log(res);
  //     // });
  //     this.api.getcats().then(files => this.files = files);
  //     console.log(this.files);
  //     this.cols = [
  //           { field: 'name', header: 'Name' },
  //           { field: 'size', header: 'Size' },
  //           { field: 'type', header: 'Type' }
  //       ];
  //   }



  getcats() {
    this.api.getcats().subscribe(res =>{
      this.files = res;
      console.log(this.files);
    });
    this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
  }
  


}
