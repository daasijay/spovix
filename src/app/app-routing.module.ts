import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttributesComponent } from './pages/attributes/attributes.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AttributeCreateComponent } from './pages/attribute-create/attribute-create.component';
import { TestComponent } from './test/test.component';
import { TestCreateComponent } from './test-create/test-create.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  { 
    path: '',   
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'product-create',
    component: ProductCreateComponent
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'attributes',
    component: AttributesComponent
  },
  {
    path:'attribute-create',
    component: AttributeCreateComponent
  },
  {
    path:'test',
    component: TestComponent
  },
  {
    path:'test-create',
    component: TestCreateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
