import {NgModule} from '@angular/core';
import {IconMaterialComponent} from "./components/icon-material/icon-material.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
   IconMaterialComponent
  ],
  imports: [
    MatIconModule
  ],
  exports: [
    IconMaterialComponent
  ]
})
export class SharedModule {
}
