import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FakeApiService} from "../../core/api-services/fake-api.service";
import {IFruitsResponse} from "../../core/interfaces/fruits.interface";
import {CartService} from "../../core/api-services/cart.service";
import {SnackBarService} from "../../core/common-services/snack-bar.service";

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOfProductsComponent implements OnInit {
  productList: IFruitsResponse[] | undefined;

  constructor(private _apiService: FakeApiService, private _cartService: CartService,
              private _snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    this.productList = this._apiService.getData();
    this.productList!.forEach((item: IFruitsResponse) => {
      Object.assign(item, {
        amountSelectedDefault: 1,
      })
    });
  }

  addFruitToCart(fruit: IFruitsResponse) {
    Object.assign(fruit, {
      selectedAmount: fruit.amountSelectedDefault,
      total: fruit.price * fruit.amountSelectedDefault!
    });
    this._cartService.addToCart(fruit);
  }

  decrement(fruit: IFruitsResponse): void {
    this._cartService.decrement(fruit);
  }

  increment(fruit: IFruitsResponse): void {
    this._cartService.increment(fruit);
  }

  inputChange(event: Event, fruit: IFruitsResponse): void {
    this._cartService.inputChange(event, fruit);
  }

}
