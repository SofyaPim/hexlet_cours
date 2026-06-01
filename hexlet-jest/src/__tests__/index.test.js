import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reverse from '../index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('reverse with fixtures', () => {
  
  const pathToInput = path.join(__dirname, '__fixtures__', 'input.txt');
  const pathToOutput = path.join(__dirname, '__fixtures__', 'output.txt');

  const text = fs.readFileSync(pathToInput, 'utf-8').trim();
  const expectedResult = fs.readFileSync(pathToOutput, 'utf-8').trim();

  expect(reverse(text)).toEqual(expectedResult);
});



test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh')
  expect(reverse('')).toEqual('')
})
