// 1
let taskFirst = 10;

while (taskFirst <= 20) {
  document.write(taskFirst);
  
  if (taskFirst < 20) {
    document.write(", ");
  }
  
  taskFirst++;
}
// 2 
let taskSecond = 10;

while (taskSecond <= 20){
taskSecond++;

console.log(taskSecond * taskSecond);
}


// 3
let taskThird = 1;

while (taskThird <= 10){
taskThird++;   

console.log(7 * taskThird);
}

// 4
let sum = 0;
let taskFour = 1;

while (taskFour <= 15){
sum += taskFour;
taskFour++;
}

console.log(sum);

// 5
let taskFive = 15;
let multiplication = 1;

while (taskFive <= 35){
multiplication *= taskFive;
taskFive++;
}

console.log(multiplication);

// 6
let taskSix = 1;
let sumSix = 0;
let average = 0;

while (taskSix <= 500){
sumSix += taskSix;
taskSix++;
average++;
}

console.log(sumSix/average);

// 7
let taskSeven = 30;
let sumSeven = 0;

while (taskSeven <= 80){
    if (!(taskSeven%2)){
        sumSeven +=  taskSeven;
    }
taskSeven++;
}

console.log(sumSeven);

// 8
let taskEight = 100;

while (taskEight <= 200){
    if (!(taskEight%3)){
    console.log(taskEight);
    }
taskEight++;
}

// 9-10-11
let taskNine = parseInt(prompt('Please enter any number?'));
let i = 1;
let countTen = 0;
let sumEleven = 0;

while (i <= taskNine){
    if(taskNine % i === 0){
    console.log(i);
    if(i % 2 === 0){
        countTen++;
        sumEleven += i;
    }
}
    i++;
}

console.log(`Count even numbers = ${countTen}. Sum of even numbers= ${sumEleven} `);

// 12
let firstNum = 1;
while (firstNum <= 10) {
  let secondNum = 1;
  while (secondNum <= 10) {
    console.log(`${firstNum} * ${secondNum} = ${firstNum*secondNum}`);
    secondNum++;
  }
  firstNum++;
}
