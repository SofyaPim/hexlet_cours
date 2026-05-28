import { strict as assert } from "node:assert";
// при использовании strict-режима
// проверка equal равносильна strictEqual
import { capitalize } from "../src/capitalize.js";

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!')
// }
assert.equal(capitalize("hello"), "Hello");

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!')
// }

assert.equal(capitalize(""), "");

console.log("Все тесты пройдены!");

// Проверка сменилась с отрицательной на положительную
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
