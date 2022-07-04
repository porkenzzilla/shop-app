import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-icon-material',
  templateUrl: './icon-material.component.html',
  styleUrls: ['./icon-material.component.scss']
})
export class IconMaterialComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('cart', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/shopping-cart.svg'));
  }
}
