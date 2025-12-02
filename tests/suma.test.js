import { test, expect } from 'node:test';
import { suma } from '../src/app.js';

test('suma 1 + 2 debe ser 3', () => {
  expect(suma(1, 2)).toBe(3);
});
