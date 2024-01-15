import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Attribute } from '../models/attribute.model';
import { Observable } from 'rxjs';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  private baseUrl: string = 'http://localhost:3000';
  private testUrl: string = 'http://localhost:3000/nodes';
  private productsUrl: string = 'http://localhost:3000/products?_sort=id&_order=desc';
  private categoryUrl: string = 'http://localhost:3000/categories?_sort=id&_order=desc';
  private attributeUrl: string = 'http://localhost:3000/attributes?_sort=id&_order=desc';

  constructor(private http: HttpClient) { }

  
      /*======================
        PRODUCT
      ========================*/
      createProduct(productObj: Product): Observable<any> {
        return this.http.post<Product>(`${this.productsUrl}`, productObj)
      }

      getProducts() {
        return this.http.get<Product[]>(`${this.productsUrl}`)
      }

      deleteProduct(id: number) {
        return this.http.delete<Product>(`${this.baseUrl}`+'/products'+`/${id}`)
      }
      
      getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}`+'/products'+`/${id}`)
      }
     
      
      /*======================
          CATEGORY
      ========================*/
      getCategories() {
        return this.http.get<Category[]>(`${this.categoryUrl}`)
      }

      deleteCategory(id: number) {
        return this.http.delete<Category>(`${this.baseUrl}`+'/categories'+`/${id}`)
      }


      /*======================
          ATTRIBUTES
      ========================*/
      getAttributes() {
        return this.http.get<Attribute[]>(`${this.attributeUrl}`)
      }

      createAttribute(attributeObj: Attribute): Observable<any> {
        return this.http.post<Attribute>(`${this.attributeUrl}`, attributeObj)
      }

      deleteAttribute(id: number) {
        return this.http.delete<Attribute>(`${this.baseUrl}`+'/attributes'+`/${id}`)
      }


      /*======================
          TESTINGS
      ========================*/

      // getcats() {
      //   return this.http.get<any[]>(`${this.testUrl}`)
      // }


      // getFiles() {
      //   return this.http.get<any>(`${this.testUrl}`)
      //     .toPromise()
      //     .then(res => <TreeNode[]>res.data);
      // }


      getcats() {
        return this.http.get<any[]>(`${this.testUrl}`)
      }

      createCat(catObj: Category): Observable<any> {
        return this.http.post<Category>(`${this.testUrl}`, catObj)
      }


      // getcats() {
      //   return this.http.get<any>(`${this.testUrl}`)
      //     .toPromise()
      //     .then(res => res);
      // }


}
