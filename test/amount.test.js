import Amount from '../src/amount';
import getMethods from './get-methods';

const METHODS = [
  'getValue',
  'getValueAsString',
  'hasOwnProperty',
  'toLocaleString',
  'valueOf',
  'constructor',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
];

test('Amount constructor', () => {
  let obj = new Amount(5);

  expect(obj._value).toBe(5);

  obj = new Amount(11);
  expect(obj._value).toBe(0);

  obj = new Amount(-1);
  expect(obj._value).toBe(0);
});

test('Amount implemented métodos', () => {
  let obj = new Amount(5);

  expect(obj.getValue()).toBe(5);
  expect(obj.getValueAsString().toLowerCase()).toBe('cinco');

  obj = new Amount(11);
  expect(obj.getValue()).toBe(0);
  expect(obj.getValueAsString().toLowerCase()).toBe('cero');

  obj = new Amount(-1);
  expect(obj.getValue()).toBe(0);
  expect(obj.getValueAsString().toLowerCase()).toBe('cero');
});

test('Amount métodos encapsulados', () => {
  let obj = new Amount(5);

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
