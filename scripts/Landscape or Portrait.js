console.log("Luong nao lon");


let stop = false; //Nota number test variabe;

function testNaN (number) {
  // console.log(stop);
   if (isNaN (number) ) {
    stop = true;
    return "Type areal number"

  } else {
    return "Input Validated"
  }
}
 

function geometry (width, height) { //Notice these parameters are local and do not mix with "number" variable
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width > height) ? 'Landscape' : 'Portrait'; //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

function checkboxes() {

 function geometry (width,height) {
   if (width == height) return 'square'
   return (width > height) ? 'Landscape' : 'Portrait' ;
 }

 function checkboxes() {

  let checkbox1, checkbox2, checkbox3;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "Landscape";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "Portrait";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "Square";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
}


function main() {
 console.log("It works");

let firstNumber;
let secondNumber;
let text;

// Get the width-value from id=textfield1
firstNumber = document.getElementById('textfield1').value;
document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

testNaN (firstNumber);

//testNaN (firstNumber);
 // Get the Height-value from id=textfield2
secondNumber = document.getElementById('textfield2').value;


document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

document.getElementById('validityTest1').innerHTML = alert ( testNaN (secondNumber));
document.getElementById('validityTest1').innerHTML = testNaN (secondNumber);


 if (stop == true) {
   document.getElementById("answer").innerHTML = "Restart the example, a width or height needs to be a number."
 } else {

    console.log("The display geometry is", geometry (firstNumber, secondNumber) );
    document.getElementById('answer').innerHTML = "This display is " + geometry (firstNumber,secondNumber);

    console.log("The display geometry is", geometry (firstNumber, secondNumber));
     document.getElementById("answer").innerHTML = "This display is " + geometry (firstNumber, secondNumber);
  }




  }
