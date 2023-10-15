import Buyable from './Buyable';
export default class Movie implements Buyable{
  constructor(
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly contry: string,
    readonly slogan: string,
    readonly genre: string,
    readonly movieTime: number | string,
    readonly price: number,
  ) {} 

}
