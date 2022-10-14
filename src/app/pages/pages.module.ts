import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PagesRoutingModule} from "./page-routing.module";
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import {CartComponent} from "./cart/cart.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import {SharedModule} from "../shared/shared.module";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from "@angular/material/icon";
import { NewFeatureComponent } from './new-feature/new-feature.component';

@NgModule({
  declarations: [
    ListOfProductsComponent,
    CartComponent,
    HeaderComponent,
    NewFeatureComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    NewFeatureComponent
  ],
  providers: [
    {provide: MatSnackBar}
  ]
})
export class PagesModule {
}
