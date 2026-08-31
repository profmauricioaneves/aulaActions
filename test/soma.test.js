const soma = require('../src/soma');

test('soma 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(6);
});

test('soma de números negativos', () => {
  expect(soma(-1, -1)).toBe(-2);
});
