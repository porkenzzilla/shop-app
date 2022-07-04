import {Injectable} from '@angular/core';
import {IFruitsResponse} from "../interfaces/fruits.interface";


@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor() {
  }

  getData(): IFruitsResponse[] {
    return [
      {
        id: 1,
        name: 'Apple',
        price: 1.09,
        amount: 20,
        image: '../../assets/images/apple.jpeg'
      },
      {
        id: 2,
        name: 'Banana',
        price: 0.59,
        amount: 15,
        image: '../../assets/images/Banana.png'
      },
      {
        id: 3,
        name: 'Papaya',
        price: 2,
        amount: 5,
        image: '../../assets/images/papaya.png'
      },
    ]
  }

}
