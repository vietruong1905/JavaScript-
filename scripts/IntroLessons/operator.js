
console.log("You made it to the console");

function simpleOperators (numberA,numberB) {
  let adding = numberA+numberB ;
  let subtraction = numberA-numberB;
  let mulitplying= umberA*numberB;
  let division= numberA / numberB;
  let modulus= numberA % numberB;
  console.log(numberA, numberB, 'adding', adding);
  console.log(numberA, numberB, 'subtraction', adding);
  console.log(numberA, numberB, 'mulitplying', adding);
  console.log(numberA, numberB, 'division', adding);
  console.log(numberA, numberB, 'modulus', adding);
}
/ skip count by ____ for ____ times staring at _____
 function skipCpinting (interval,times, startingNumber) {
   for (let i =1; i <= times; i= i++ ) {
   startingNumber = startingNumber + interval
   console.log(startingNumber);
 }
}

/Illustrate a WHILE Loop, skip couting
 function howManyTimes (numberStart, numberEnd, skipCount){
   while (numberStart<numberEnd){
console.log    (numberStart+= skipCout);
  }
}
let number = [4,7,13,99,0,100,5,1,'1'];

simpleOperators(number[0], number[1]);
simpleOperators(number[2], number[3]);
simpleOperators(number[4], number[5]);

skipCpinting (number[0], number[6], number[1]);
skipCpinting (number[5], number[3], number[2]);
howManyTimes(number[0],number[6],number[7]);
