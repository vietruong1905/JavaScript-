//console.log("Did you change my file name?");
console.log("You made it to the console!");

let stop = false;
function testNaN (number) {
   if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function orderingfour (first, second,third,fourth) {
  let memory1;

  while (first > second || second > third || third > fourth) {
    if (first > second) {
      memory1 = second;
      second = first;
      first = memory1;
    }
    if (second > third) {
      memory1 = third;
      third = second;
      second = memory1;
    }
    if (third > fourth) {
      memory1 = fourth;
      fourth = third;
      third = memory1;
    }


  if (first <= second) {
    if (second <= third) {
      if (third <= fourth) {
      return first + ", " + second + ", " + third + "," + fourth;
    }}}}
   else {{{{
    return "Check program for errors"
  }
}

function checkboxes() {
  let checkbox1, checkbox2, checkbox3, checkbox4;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  checkbox4 = document.getElementById('Checkbox4').checked;
  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "False, 50% is less than 60%";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "False, 70% > 65%";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "False, these numbers are the same";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
  if ( checkbox4 == true ) {
    document.getElementById('checkbox4_answer').innerHTML = "an con cac";
  } else {
    document.getElementById('checkbox4_answer').innerHTML = "Answer?";
  }
}


function main() {


  let firstNumber, secondNumber, thirdNumber; fourthNumber;


  firstNumber = document.getElementById('textfield1').value;

  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);


  secondNumber = document.getElementById('textfield2').value;

  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);


  thirdNumber = document.getElementById('textfield3').value;

  document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdNumber));
  document.getElementById('validityTest3').innerHTML = testNaN (thirdNumber);

  fourthNumber = document.getElementById('textfield4').value;

  document.getElementById('validityTest4').innerHTML = alert ( testNaN (fourthNumber));
  document.getElementById('validityTest4').innerHTML = testNaN (fourthNumber);




  console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber + " and \n the third number is " + thirdNumber + " and \n the fourth number is " + fourthNumber);



  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The smallest to largest order is ", orderingfour (firstNumber, secondNumber, thirdNumber,fourthNumber );
    document.getElementById('answer').innerHTML = "The numbers " + firstNumber + ", " + secondNumber + ", " + thirdNumber + "," + fourthNumber + " in order from smallest to largets is ... \n" +
    orderingfour(firstNumber, secondNumber, thirdNumber, fourthNumber);
  }
}
