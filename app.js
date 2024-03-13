import {extractEnteredNumberValues, extractNumbers} from './src/parser.js';
import {calculateResult} from './src/math.js';
import {generateOutputText, outputResult} from './output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const formValues = extractEnteredNumberValues(form);
  const result = calculateResult(formValues);
  const resultText = generateOutputText(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
