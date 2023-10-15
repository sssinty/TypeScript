import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items]; 
  }

  totalPrice() {
    let sum: number = 0
    for(let key in this._items) {
        sum += this._items[key].price
    }
    return sum;
  }
  discountCalc(value : number) {
    let sum: number = 0
    for(let key in this._items) {
        sum += this._items[key].price
    }
    let discount: number = (sum * value) / 100
    return sum - discount
  }

  delete(id: number): void {
    let findeProductIndex: number = this._items.findIndex(product => {return product.id === id});
    this._items.splice(findeProductIndex, 1)
    if(findeProductIndex === -1) {
      throw Error("Ошибка! Данный товар отсутствует")
    }
    

  }
}