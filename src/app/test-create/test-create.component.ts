import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../service/node.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.scss']
})
export class TestCreateComponent implements OnInit{

  //files: TreeNode[] = [];
  cats:any;
  selectedNode: any;
  nodes: TreeNode[] = [];

  public catCreateForm!: FormGroup;
  constructor(private fb:FormBuilder, private api:ApiService,public nodeService: NodeService) {}

  ngOnInit(): void {
    this.catCreateForm = this.fb.group({
      name: [""],
      values: [""],
    });

    this.getcats();


    
     


  }

  createCat() {
    this.api.createCat(this.catCreateForm.value).subscribe(res=>{
      alert("Category has been inserted");
      this.catCreateForm.reset();
    });
  }

  


  getcats() {
   // this.nodeService.getcats().then(nodes => this.nodes = nodes);
   
   this.api.getcats().subscribe(res =>{
     this.nodes = res;
     console.log(this.nodes);
    });

  }




}
