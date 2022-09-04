import Product from '../src/product';
import getMethods from './get-methods';

const METHODS = [
  'getName',
  'getPrice',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('Product constructor', () => {
  let obj = new Product('Cable', 321);

  expect(obj._name.toLowerCase()).toBe('cable');
  expect(obj._price).toBe(321);
});

test('Product implemented métodos', () => {
  let obj = new Product('Cable', 321);

  expect(obj.getName().toLowerCase()).toBe('cable');
  expect(obj.getPrice()).toBe(321);
});

test('Product métodos encapsulados', () => {
  let obj = new Product('Cable', 321);

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
