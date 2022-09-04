import Product from '../src/product';
import Amount from '../src/amount';
import Item from '../src/item';
import Cart from '../src/cart';
import getMethods from './get-methods';

const METHODS = [
  'addItem',
  'getNumberOfItems',
  'getNumberOfProducts',
  'getCost',
  'getMostExpensive',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('Cart constructor', () => {
  let obj = new Cart();

  expect(obj._items.length).toBe(0);
});

test('Cart implemented métodos', () => {
  let product1 = new Product('Cable', 321);
  let product2 = new Product('Monitor', 123);

  let obj = new Cart();

  let item1 = new Item(product1, new Amount(3));
  let item2 = new Item(product2, new Amount(4));
  let item3 = new Item(product1, new Amount(5));

  obj.addItem(item1);
  expect(obj._items[0].getName().toLowerCase()).toBe('cable');

  obj.addItem(item2);
  expect(obj._items[1].getName().toLowerCase()).toBe('monitor');

  obj.addItem(item3);
  expect(obj._items[0].getAmount()).toBe(5);

  expect(obj.getNumberOfItems()).toBe(2);
  expect(obj.getNumberOfProducts()).toBe(9);
  expect(obj.getCost()).toBe(2097);
  expect(obj.getMostExpensive().toLowerCase()).toBe('cable');
});

test('Cart métodos encapsulados', () => {
  let obj = new Cart();

  Object.getOwnPropertyNames(obj).filter(
    (item) => typeof obj[item] === 'function'
  );
  let methods = getMethods(obj);

  let notEncapsulated = [];
  methods.forEach((m) => {
    if (!m.startsWith('_')) {
      if (!METHODS.find((element) => element === m)) {
        notEncapsulated.push(m);
      }
    }
  });

  if (notEncapsulated.length > 0) {
    console.log(notEncapsulated);
  }

  expect(notEncapsulated.length).toBe(0);
});
