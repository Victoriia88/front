// firstName = prompt('What\'s your name');
// alert('Hello, ' + firstName + ' ! How are you?');

// hours = prompt('Specify the number of hours?');
// hoursToNumber = parseInt (hours);
// seconds = hoursToNumber * 60 * 60;
// alert('In ' + hoursToNumber + ' hours we have ' + seconds + ' seconds!');

// firstNumber = prompt ('Please enter the first number?');
// secondNumber = prompt ('Please enter the second number?');
// minus = (+firstNumber) - (+secondNumber);
// plus = (+firstNumber) + (+secondNumber);
// multiplication = (+firstNumber) * (+secondNumber);
// divide = (+firstNumber) / (+secondNumber);
// alert (firstNumber + '-' + secondNumber + '=' + minus);
// alert (firstNumber + '+' + secondNumber + '=' + plus);
// alert (firstNumber + '*' + secondNumber + '=' + multiplication);
// alert (firstNumber + '/' + secondNumber + '=' + divide);

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log('ви скасували');
    break;
  case numOrStr.trim() === '':
    console.log('Empty String');
    break;
  case isNaN(+numOrStr):
    console.log('number is Ba_NaN');
    break;
  default:
    console.log('OK!');
    break;
}
