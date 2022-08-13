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


// ASSIGNMENT OPERATORS
// =, ==, ===, +=, -=, *=, /=, %=, **=

let number1 = 5;
let number2 = 8;

number1 += number2;
console.log(number1);

number1 -= number2;
console.log(number1);

number1 *= number2;
console.log(number1);

number1 /= number2;
console.log(number1)

number2 %= number1;
console.log(number2)

number1 **= number2;
console.log(number1)


// LOGICAL OPERATORS
// &&, ||, !

let year = 2022;
let month = 8;
let weatherSunny = true;

console.log(year == 2022 && weatherSunny==false); // false
console.log(year == 2022 && weatherSunny==true); // true


console.log(year == 2022 || weatherSunny==false); // true
console.log(year == 2022 || weatherSunny==false); // true
console.log(year == 2023 || weatherSunny==false); // false

console.log(year == 2022 && weatherSunny!=false); // true

console.log(!(weatherSunny)); // false
console.log(!(year == 2023)); // true


// COMPARISON OPERATORS
// ==, ===, !=, <, >, <=, >=

console.log(3=='3'); // true
console.log(3==3); // true
console.log(3==4); // false

console.log(3==='3'); // false
console.log(3===3); // true

console.log(year != 2023 || weatherSunny==false); // true

console.log((year==2023 || weatherSunny) && (year!=2022 || month==8)); // true

console.log(3<'4'); // true
console.log(3<4); // true

console.log(3>'4'); // false
console.log(3>4); // false

console.log(3<='3'); // true
console.log(3<=3); // true

console.log(3>='3'); // true
console.log(3>=3); // true


// DIALOG BOXES
// alert, prompt, confirm

alert('You have to save to continue the process!');

let nameee = prompt('Enter your name: ');
let yearOfBirth = prompt('Enter year of your birth: ');

console.log('Name: ' + nameee);
console.log('Year of birth: ' + yearOfBirth);

console.log(typeof nameee); // string
console.log(typeof yearOfBirth); // string


let result1 = confirm('Are you sure you want to delete it?');
console.log(result1); // true or false



// CONDITION STRUCTURES

let note = 75; // passed note is 70

if(note>=70){
    console.log('Congratulations. Your note is ' + note +'. You have passed the exam.');
}
else{
    console.log('You enter the exam again.');
}


// CONDITION EXERCISE

let myName = "Okan";
let agee = 32;
let nameTaken = prompt('Enter your name: ');
let ageTaken = Number(prompt('Enter your age: '));

if ((myName == nameTaken) && (agee === ageTaken)){
    console.log("The information is true.");
}
else{
    console.log("The information is false.");
}


// Calculate

let note1 = Number(prompt("Enter your note of the first exam: ")); // .3
let note2 = Number(prompt("Enter your note of the second exam: ")); // .3
let note3 = Number(prompt("Enter your note of the last exam: "));  // .4

let weightedMean = ((note1 * 30) / 100 + (note2 * 30) / 100 + (note3 * 40) / 100);

// Passed note of the lesson is 70. 
if (weightedMean >= 70){
    alert('Congratulations! Your note is ' + weightedMean + ".");
}
else{
    alert("Your note is " + weightedMean + ". You should study more the lesson.");
}