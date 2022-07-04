export interface IFruitsResponse {
  id: number,
  name: string,
  price: number,
  amount: number,
  image: string,
  // Custom
  amountSelectedDefault?: number,
  selectedAmount?: number,
  total?: number
}

