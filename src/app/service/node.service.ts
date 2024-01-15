import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

    private baseUrl: string = 'http://localhost:3000';
    private testUrl: string = 'http://localhost:3000/nodes';

    constructor(private http: HttpClient) { }



    // getcats(){

    //   return this.http.get<any>(`${this.testUrl}`); 
    // }


    getcats() {
      return this.http.get<any>(`${this.testUrl}`)
        .toPromise()
        .then(res => res);
    }
    
    
    

    



}