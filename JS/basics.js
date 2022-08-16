// 1- CONSOLE
console.log("Hello World")
console.log("Okan Öztan")
console.log(2.2)
console.log(true)


// 2- DATA TYPES
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



// 3- ARITMETIC OPERATORS
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


// 4- ASSIGNMENT OPERATORS
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


// 5- LOGICAL OPERATORS
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


// 6- COMPARISON OPERATORS
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


// 7- DIALOG BOXES
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



// 8- CONDITION STRUCTURES

let note = 75; // passed note is 70

if(note>=70){
    console.log('Congratulations. Your note is ' + note +'. You have passed the exam.');
}
else{
    console.log('You enter the exam again.');
}


// 8.1- CONDITION EXERCISE

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


// 8.2- Calculate

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


// 8.3- Choose a menu

let choose = prompt("Choose a menu: \n1-Small Menu\n2-Medium Menu\n3-Big Menu");

if(choose==1){
    alert("You have choosen a small menu.");
}
else if(choose==='2'){
    alert("You have choosen a medium menu.");
}
else if(choose==3){
    alert("You have choosen a big menu.");
}
else{
    alert('There is no such a menu.');
}



// 8.4- BODY MASS INDEX

let weight = Number(prompt("Enter your weight: ")); //kilo
let height = Number(prompt("Enter your height: ")); // metre

let bodyMassIndex = weight / height**2;


if(bodyMassIndex < 18.5){
    alert(`Your body mass index is ${bodyMassIndex}. It is under ideal kilo.`);
}

else if(bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9){
    alert(`Your body mass index is ${bodyMassIndex}. It is ideal kilo.`);
}

else if(bodyMassIndex >= 25  && bodyMassIndex <= 39.9){
    alert(`Your body mass index is ${bodyMassIndex}. It is over ideal kilo.`);
}

else if(40<=bodyMassIndex){
    alert(`Your body mass index is ${bodyMassIndex}.It is well above the ideal weight.`);
}

else{
    alert(`Enter a current value(number).`);
}


// 8.5- Gas Station

let fuel = 22.25;   // TL
let dizel = 24.53;  //TL
let lpg = 11.1;    // TL


let type = prompt("Enter type that you would like: ");
let liter;
if(type=="fuel"){
    liter = parseInt(prompt("How many liters: "))
    let price = liter * fuel;
    alert(`Amount to pay ${price}.`);
}

else if(type == "dizel"){
    liter = parseInt(prompt("How many liters: "))
    let price2 = liter * dizel;
    alert(`Amount to pay ${price2}.`);
}

else if(type=="lpg"){
    liter = parseInt(prompt("How many liters: "))
    let price3 = liter * lpg;
    alert(`Amount to pay ${price3}.`);
}

else{
    alert("Enter a current value.")
}


// 9- switch Statement

let number;
let value1 = 3;
switch(value1){
    case 1:
        number = 1;
        break;
    case 2:
        number = 2;
        break;
    case 3:
        number = 3;
        break;
    default:
        console.log("Enter a current value")
        break;
}
console.log(`The value of number variable is ${number}.`);



// Type is important
let value2 = 1;
let num; 
switch(value2){
    case "1":
        num = "1";
        break;
    case 1:
        num = "one";
        break;
    case 2:
        num = "two";
        break;
    default:
        console.log("Enter a current value.");        
}

console.log(`The num is ${num}.`);


// 9.1- Simple Calculator
let result;
let process = prompt("What is the process?");

let fNumber = parseFloat(prompt("Enter the first number: "));
let sNumber = parseFloat(prompt("Enter the second number: "));
switch(process){
    case "+":
        result = fNumber + sNumber;
        break;
    case "-":
        result = fNumber - sNumber;
        break;
    case "*":
        result = fNumber * sNumber;
        break;
    case "/":
        result = fNumber / sNumber;
        break;
    default:
        console.log("Enter a current process");
}

console.log(`${fNumber} ${process} ${sNumber} is ${result}.`);



// 9.2- DAYS

const days = "1-Monday\n2-Tuesday\n3-Wednesday\n4-Thursday\n5-Friday\n"+
    "6-Saturday\nSunday\nChoose a day: ";

const dayChoose = parseInt(prompt(days));

switch(dayChoose){
    case 1:
        console.log("The day chosen is monday.");
        break;
    case 2:
        console.log("The day chosen is tuesday.");
        break;
    case 3:
        console.log("The day chosen is wednesday.");
        break;
    case 4:
        console.log("The day chosen is thursday.");
        break;
    case 5:
        console.log("The day chosen is friday.");
        break;
    case 6:
        console.log("The day chosen is saturday.");
        break;
    case 7:
        console.log("The day chosen is sunday.");
        break;
}