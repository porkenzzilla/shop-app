import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {CartService} from "../../core/api-services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  totalItem: string = '';

  constructor(private _cartService: CartService, private _ch: ChangeDetectorRef) {
  }

  ngOnInit(): void {
      this._cartService.getProducts().subscribe((res) => {
        if (res.length === 0) {
          this.totalItem = '';
          this._ch.detectChanges();
          return;
        }
        this.totalItem = String(res.length);
        this._ch.detectChanges();
      })
    }

}
