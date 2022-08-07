// CONSOLE
console.log("Hello World")
console.log("Okan Öztan")
console.log(2.2)
console.log(true)


// DATA TYPES
let namee = "Okan";
console.log(namee);
console.log(typeof namee);

let age = 32;
console.log(age);
console.log(typeof age);

let testing = 6>3;
console.log(testing);
console.log(testing);

let a = 12;
let b = 7;
let result = a + b;
let trying = result > 16;
console.log(trying);
console.log(typeof trying);

let c = null;
console.log(c);
console.log(typeof c);

let d;
console.log(d);
console.log(typeof d);


let human = {
    firstname : "Okan",
    lastname : "Öztan",
    agee : 32 
}

console.log(human);
console.log(typeof human);


let array = [1,2,3,4,5,6,7,8];

console.log(array);
console.log(typeof array);


let func = function(){
    console.log("Hello World");
}

func();
console.log(typeof func);



// ARITMETIC OPERATORS
// +, -, *, /, %, ++, --, **

let firstNumber = 3;
let secondNumber = 7;
let resultOfAddition = firstNumber + secondNumber;
console.log(resultOfAddition);
console.log(typeof resultOfAddition);


let strValue = '3';
let resultOfAddition2 = strValue + secondNumber;
console.log(resultOfAddition2);
console.log(typeof resultOfAddition2);


let resultOfSubtraction = secondNumber - firstNumber;
console.log(resultOfSubtraction);
console.log(typeof resultOfSubtraction);

let resultOfSubtraction2 = secondNumber - strValue;
console.log(resultOfSubtraction2);
console.log(typeof resultOfSubtraction2);

let resultOfMultiplication = firstNumber * secondNumber;
console.log(resultOfMultiplication);
console.log(typeof resultOfMultiplication);

let resultOfDivision = firstNumber / secondNumber;
console.log(resultOfDivision);
console.log(typeof resultOfDivision);

let resultOfRemainder = secondNumber % firstNumber;
console.log(resultOfRemainder);
console.log(typeof resultOfRemainder);

let thirdNumber = 8;
thirdNumber++;
console.log(thirdNumber);
thirdNumber--;
console.log(thirdNumber);

let resultOfExponentiation = thirdNumber ** firstNumber;
console.log(resultOfExponentiation);
console.log(typeof resultOfExponentiation);