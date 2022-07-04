import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CartService} from "../../core/api-services/cart.service";
import {IFruitsResponse} from "../../core/interfaces/fruits.interface";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {SnackBarService} from "../../core/common-services/snack-bar.service";


@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  productsSelected: IFruitsResponse[] | undefined;
  totalPrice: number = 0;

  constructor(private _cartService: CartService, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, private _snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon('trash', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/trash-bin.svg'));
    this._cartService.getProducts().subscribe((res) => {
      this.productsSelected = res;
    });
    this.getTotalPrice();
  }

  removeFruit(product: IFruitsResponse): void {
    this._cartService.removeCartItem(product);
  }

  removeAllFruit(): void {
    this._cartService.removeAllCart();
  }

  getTotalPrice(): void {
    this.totalPrice = 0;
    this.productsSelected?.forEach((item) => {
      this.totalPrice = this.totalPrice! + Number(item.total!);
    });
  }

  buyNow(): void{
    this._snackBar.openSnackBar("It's just a test", 'ok', 5000);
  }

  addFruitToCart(fruit: IFruitsResponse){
    Object.assign(fruit, {
      selectedAmount: fruit.amountSelectedDefault,
      total: fruit.price * fruit.amountSelectedDefault!
    });
    this._cartService.addToCart(fruit);
    this.getTotalPrice();
  }

  decrement(fruit: IFruitsResponse): void{
    this._cartService.decrement(fruit);
  }

  increment(fruit: IFruitsResponse): void{
    this._cartService.increment(fruit);
  }

  inputChange(event: Event, fruit: IFruitsResponse): void {
    this._cartService.inputChange(event, fruit);
  }

}
