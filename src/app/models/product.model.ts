// export interface Product {
//     id: number;
//     categoryId: number;
//     name: string;
//     description: string;
//     attributes: [];
// }


export class Product {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    //attributes: [];
  
    constructor(id: number, categoryId: number, name:string, description:string) {
      this.id = id;
      this.categoryId = categoryId;
      this.name = name;
      this.description = description;
    }
  
    // getID(): number {
    //     return this.id;
    // }
    // getName(): string {
    //     return `${this.name}`;
    // }
    // getCategoryID(): number {
    //     return this.categoryId;
    // }
    // getDescription(): string {
    //     return `${this.description}`;
    // }
  
    
  }
