import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});
test('test methods in card class', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1009, 'Мстители', 2012, 'США','Avengers Assemble!', 'фантастика, боевик, фэнтези, приключениея', '113 мин./02:17', 1000))
  expect(cart.totalPrice()).toBe(3900);
  expect(cart.discountCalc(20)).toEqual(3120);
  cart.delete(1001);
  expect(cart.items).toEqual(cart.items);
  expect(() => cart.delete(100)).toThrow("Ошибка! Данный товар отсутствует")
})
