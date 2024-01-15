import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AttributesComponent } from './pages/attributes/attributes.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { PanelModule } from 'primeng/panel';
import { TreeTableModule } from 'primeng/treetable';
import { AttributeCreateComponent } from './pages/attribute-create/attribute-create.component';
import { TestComponent } from './test/test.component';
import { NodeService } from './service/node.service';
import { TestCreateComponent } from './test-create/test-create.component';
import { TreeSelectModule } from 'primeng/treeselect';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductCreateComponent,
    DashboardComponent,
    AttributesComponent,
    ProductDetailsComponent,
    AttributeCreateComponent,
    TestComponent,
    TestCreateComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenuModule,
    MenubarModule,
    FormsModule,
    DropdownModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    PanelModule,
    TreeTableModule,
    TreeSelectModule,

    
  ],
  providers: [NodeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
