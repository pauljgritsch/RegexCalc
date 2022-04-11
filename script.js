const display = document.querySelector('#display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equals')
let operator;
let operand1 = 0;
let operand2 = 0;
const numsandops = document.querySelectorAll(".number, .operator")

document.getElementById('c').addEventListener('click', () => display.textContent = '')

numsandops.forEach(button => button.addEventListener('click', () => {
  display.textContent += button.id;
}))

equal.addEventListener('click', () => {
  display.textContent = loopcalc(display.textContent)
})


function loopcalc(string) {
  let sections = [];
  let operand;
  let tempstring = '';
  for (let char of string) {
    if (/[\d.]/.test(char)) {
      tempstring += char;
    } else {
      sections.push(tempstring);
      sections.push(char);
      tempstring = ''
    }
  }
  sections.push(tempstring)

  let result = +sections[0];
  console.log(sections)
  for (section of sections) {
    if (!Number(section)) {
      // console.log(section)
      operand = section;
      continue
      }
    
    if (operand == "+") {
      result += +section;
    } else if (operand == "-") {
      result -= section;
    } else if (operand == "*") {
      result *= section;
    } else if (operand == "/") {
      result /= section;
    }
    }
    return result;
  }

