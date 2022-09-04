import Product from '../src/product';
import Amount from '../src/amount';
import Item from '../src/item';
import getMethods from './get-methods';

const METHODS = [
  'getName',
  'getAmount',
  'getAmountAsString',
  'getPrice',
  'getTotalPrice',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('Item constructor', () => {
  let amount = new Amount(7);
  let product = new Product('Cable', 123);

  let obj = new Item(product, amount);

  expect(obj._amount).toBe(amount);
  expect(obj._product).toBe(product);
});

test('Item implemented métodos', () => {
  let amount = new Amount(7);
  let product = new Product('Cable', 123);

  let obj = new Item(product, amount);

  expect(obj.getName().toLowerCase()).toBe('cable');
  expect(obj.getAmount()).toBe(7);
  expect(obj.getAmountAsString().toLowerCase()).toBe('siete');
  expect(obj.getPrice()).toBe(123);
  expect(obj.getTotalPrice()).toBe(861);
});

test('Item métodos encapsulados', () => {
  let amount = new Amount(7);
  let product = new Product('Cable', 123);

  let obj = new Item(product, amount);

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
