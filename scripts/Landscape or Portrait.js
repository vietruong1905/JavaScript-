console.log("Luong nao lon");


let stop = false; //Nota number test variabe;

function testNaN (number) {
   console.log(stop);
   if (isNaN (number) ) {
    stop = true;
    return "Type areal number"

  } else {
    return "Input Validated"
  }

}

function main() {
 console.log("It works");

let firstNumber;
let secondNumber;
let text;

// Get the width-value from id=textfield1
firstNumber = document.getElementByID("textfield1").value;
document.getElementByID("validityTest1").innerHTML = alert ( testNaN (firstNumber));
document.getElementByID("validityTest1").innerHTML = testNaN (firstNumber);
testNaN (firstNumber);

// Get the Height-value from id=textfield2
secondNumber = document.getElementByID("textfield2").value;

document.getElementByID("validityTest1").innerHTML = alert ( testNaN (secondNumber));
document.getElementByID("validityTest1").innerHTML = testNaN (secondtNumber);

 if (stop == true) {
   document.getElementByID("answer").innerHTML = "Restart the example, a width or height needs to be a number."
 } else {
    console.log("The display geometry is", geometry (firstNumber, secondNumber));
    document.getElementByID('answer').innerHTML = "This display is " + geometry (firstNumber,secondNumber);
 }




  }
