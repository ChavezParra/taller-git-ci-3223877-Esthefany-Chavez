const test = require('node:test');
const assert = require('node:assert');

const { suma } = require('../src/app.js');

test('suma 1 + 2 debe ser 3', () => {
  assert.strictEqual(suma(1, 2), 3);
});
