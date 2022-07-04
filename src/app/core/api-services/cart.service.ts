import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IFruitsResponse} from "../interfaces/fruits.interface";
import {SnackBarService} from "../common-services/snack-bar.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList: IFruitsResponse[] = [];
  productList = new BehaviorSubject<IFruitsResponse[]>([]);
  indexNeeded!: number;

  constructor(private _snackBar: SnackBarService) {
  }

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: IFruitsResponse): void {
    if(this.cartItemList.length !== 0){
      this.removeCartItem(product);
      if(this.indexNeeded !== undefined) {
        this.cartItemList.splice(this.indexNeeded, 0, product);
        this.productList.next(this.cartItemList);
        return;
      }
    }
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  removeCartItem(product: IFruitsResponse){
    this.cartItemList.map((item: IFruitsResponse, index: number)=>{
      if(product.id === item.id){
        this.indexNeeded = index;
        this.cartItemList.splice(index, 1);
        this.productList.next(this.cartItemList);
      }
      })
  }

  removeAllCart(): void{
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  decrement(fruit: IFruitsResponse): void{
    if(fruit.amountSelectedDefault! > 1) {
      fruit.amountSelectedDefault = fruit.amountSelectedDefault! - 1;
      return;
    }
  }

  increment(fruit: IFruitsResponse): void{
    if(fruit.amount > fruit.amountSelectedDefault!) {
      fruit.amountSelectedDefault = fruit.amountSelectedDefault! + 1;
      return;
    }
    this._snackBar.openSnackBar(`Sorry, this is maximum amount of ${fruit.name}`, 'ok', 5000);
  }

  inputChange(event: Event, fruit: IFruitsResponse): void {
    if(!(event.target as HTMLInputElement).value.match(/\d+/g)){
      this._snackBar.openSnackBar(`only positive number`, 'ok');
      (event.target as HTMLInputElement).value = '1';
      return;
    }
    if(+(event.target as HTMLInputElement).value > fruit.amount){
      this._snackBar.openSnackBar(`Sorry, maximum amount of ${fruit.name} is: ${fruit.amount}`, 'ok');
      (event.target as HTMLInputElement).value = '1';
      return;
    }
    fruit.amountSelectedDefault = Number((event.target as HTMLInputElement).value);
  }

}
