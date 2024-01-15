import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-attribute-create',
  templateUrl: './attribute-create.component.html',
  styleUrls: ['./attribute-create.component.scss']
})
export class AttributeCreateComponent implements OnInit{

  public attributeCreateForm!: FormGroup;

  constructor(private fb:FormBuilder, private api:ApiService) {}

  ngOnInit(): void {
    this.attributeCreateForm = this.fb.group({
      name: [""],
      values: [""],
    });
  }

  createAttribute() {
    this.api.createAttribute(this.attributeCreateForm.value).subscribe(res=>{
      alert("Attribute has been inserted");
      this.attributeCreateForm.reset();
    });
  }

}
