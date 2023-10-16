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
    let sum: number = this._items.reduce((acc, item) => {
      return acc + item.price;
    },0)
    return sum;
  }
  discountCalc(value : number) {
    let sum: number = this.totalPrice();
    let discount: number = (sum * value) / 100;
    return sum - discount;
  }

  delete(id: number): void {
    let findeProductIndex: number = this._items.findIndex(product => {return product.id === id});
    this._items.splice(findeProductIndex, 1);
    if(findeProductIndex === -1) {
      throw Error("Ошибка! Данный товар отсутствует");
    }
    

  }
}