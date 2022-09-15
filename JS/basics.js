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


// 10- FUNCTIONS

function greet(){
    console.log("Hello World");
}
greet();


// 10.1- function paramater
function takeName(name){
    console.log(`The name of the user is ${name}.`);
}

takeName("Okan"); // enter an argument


// 10.2- sum function
function add(x,y){
    return x + y;
}

let number1 = parseFloat(prompt("Enter the first number: "));
let number2 = parseFloat(prompt("Enter the second number: "));

let result = add(number1,number2);
console.log("The sum is " + result);


// 10.3- function as expression
let a = function(anyNumber) {return anyNumber * anyNumber};
console.log(a(5));

let b = a(7);
console.log(b);


// 11- VARIABLE SCOPE

// 11.1- Global Scope
let x = "Hello";

function greet(){
    console.log(x);
}

greet(); // Hello


// 11.1.1
function greet(){
    x = 7;
}

console.log(x);  // Hello

greet();
console.log(x); // 7


// 11.2- Local Scope
let x = "Hello";

function greet() {
    let y = "World";
    console.log(x+y);
}

greet(); // HelloWorld
console.log(x+y); // error


// 11.3- let is Block Scope
// global variable
let x = "hello";

function greet() {

    // local variable
    let y = "World";
    console.log(x + ' ' + y);

    if (y == "World") {

        // block-scoped variable
        let z = "hello";

        console.log(x + ' ' + y + ' ' + z);
    }

    // variable z cannot be accessed here
    console.log(x + ' ' + y + ' ' + z);
}

greet();


// 12- JAVASCRIPT OBJECTS

// 12.1- JavaScript Object Declaration
const car = {
    brand : "ford",
    color : "white",
}

// 12.2- Accessing Object Properties
const car2 = {brand: "BMW", color: "blue"}

console.log(car.brand);
console.log(car2["color"]);

// 12.3- JavaScript Nested Objects
const car3 = {
    brand : "Ford",
    color : "black",
    model : 2020,
    other : {
        accident : false,
        price : "30$"
    }
}

console.log(car3.model);
console.log(car3.other.accident);
console.log(car3.other.price);


// 13- JavaScript Methods and this Keyword
let person = {
    name : 'Okan',
    greet : function() { console.log("Hello everybody"); }
};
console.log(person.name);
person.greet()

// 13.1- Adding a Method to a JavaScript Object
let person = {};
person.name = 'Hüma';

person.greet = function() {
    console.log("Hello");
};
person.greet();


// 13.2- this Keyword
let person ={
    name : 'Okan',
    age : 32,
    
    introduce : function() {console.log(`My name is ${this.name}.`); }
};
person.introduce()

// 13.2.1
let person = {
    name : "Okan",
    age : 32,
    
    greet : function() {
        let surname = Oztan;
        console.log(`My name is ${this.name} and I am ${surname}`)
    }
};
person.greet();



// 14- CONSTRUCTOR FUNCTION

function Vehicle() {
    this.brand = "TOGG",
    this.released = 2023
}

const vehicle = new Vehicle();
console.log(vehicle.brand);


// 14.1- Write Multiple Objects with Constructor Function
function Vehicle() {
    this.name = 'TOGG',
    this.color = 'red'
}

const vehicle1 = new Vehicle();
const vehicle2 = new Vehicle();
console.log(vehicle1.name);
console.log(vehicle2.name);


// 14.2- Constructor Function Parameters
function Vehicle(brand,color,price) {
    this.brand = brand,
    this.color = color,
    this.price = price
}

const vehicle1 = new Vehicle('TOGG','red','40$');
const vehicle2 = new Vehicle('Ford','blue','40$');

console.log(vehicle1.brand);
console.log(vehicle2.brand);


// 14.3- Object Literal
let person = {
    name : 'Okan',
    age : 24
}

let student = person;
student.age = 27;

console.log(person.age); // 27


// 14.4- Adding Properties And Methods in an Object
function Person() {
    this.name = "Okan",
    this.age = 25
}

let person1 = new Person();
let person2 = new Person();

person1.gender = "male";
person1.greet = function greet() {
    console.log("Hello everybody");
}

person1.greet();
person2.greet(); // error


// 14.5- Object Prototype
function Person() {
    this.name = "Okan",
    this.age = 22
}

let person1 = new Person();
let person2 = new Person();

Person.prototype.gender = "male";

console.log(person1.gender);
console.log(person2.gender);

// 14.6- Built-in Constructors
let x = new String('Okan');
let y = new Number(54);
let z = new Boolean(true);

console.log(x);
console.log(y);
console.log(z);


// 15 - GETTER and SETTER

//15.1-Getter
const person = {
    firstName : 'Okan',

    get getName() {
        return this.firstName;
    }
};

console.log(person.firstName);  // Okan
console.log(person.getName);  // Okan
console.log(person.getName());  // error

//15.2-Setter
const person = {
    firstName: "Okan",

    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(person.firstName); // Okan
person.changeName = "Furkan";

console.log(person.firstName); // Furkan


//15.3-Object.defineProperty(obj, prop, descriptor)
const person = {
    firstName : "Furkan",
};

Object.defineProperty(person,"getName", {
    get : function() {
        return this.firstName;
    }
});

Object.defineProperty(person, "changeName", {
    set : function(newName) {
        this.firstName = newName;
    }
});

console.log(person.getName); // Furkan
person.changeName = "Okan";

console.log(person.getName); // Okan


// 16- JAVASCRIPT PROTOTYPE

// 16.1-Prototype Inheritance
function Person() {
    this.name = "Okan"
};

const person1 = new Person();
const person2 = new Person();
Person.prototype.gender = "male";

console.log(Person.prototype)
console.log(person1.gender); // male
console.log(person2.gender); // male


// 16.2- Add Methods to a Constructor Function Using Prototype
function Person() {
    this.name = "Okan",
    this.age = 24
}

const person1 = new Person();
const person2 = new Person();

Person.prototype.greet = function() {
    console.log("Hello" + " " + this.name);
}

person1.greet();
person2.greet();


// 16.3- Changing Prototype
function Person() {
    this.name =  "Okan"
}

Person.prototype.age = 25;
const person1 = new Person();

Person.prototype = {age : 50}
const person4 = new Person();

console.log(person4.age); // 50
console.log(person1.age); // 25


// 16.4- Prototype Chaining
function Person() {
    this.name = "Okan"
}

Person.prototype.name = "Furkan";
Person.prototype.age = 20

const person = new Person();

console.log(person.name); // Okan
console.log(person.age); // 20


// 17- ARRAYS

// 17.1- Write an Array
const words = ["Okan","Furkan","Hüma"];
const array1 = ["read","sleep"];
const array2 = new Array("read","sleep");

const emptyArray = [];
const numberArray = [1,2,3,4,5,6,7];
const stringArray = ["read","sleep"];
const newData1 = ["work","exercise",3,true];
const newData2 = [
    {"exercise1":"read"},
    [1,6,9],
    function greet() {console.log("hello")} 
];

// 17.2- Access Elements of an Array
const myArray = ['w','o','r','k'];

// first element
console.log(myArray[0]); // w

// second element
console.log(myArray[1]); // o


// 17.3- Add an Element to an Array
let dailyRoutine = ['read','eat','pray','sleep','walk'];
dailyRoutine.push('work'); // end
console.log(dailyRoutine);

dailyRoutine.unshift('exercise'); // begin
console.log(dailyRoutine);

// 17.4- Change the Elements of an Array
let dailyRoutine = ['read','eat','pray','sleep','walk'];
dailyRoutine[4] = 'exercise';
console.log(dailyRoutine); // ['read','eat','pray','sleep','exercise']

dailyRoutine[6] = 'study';
console.log(dailyRoutine); //['read', 'eat', 'pray', 'sleep', 'exercise', empty, 'study']


// 17.5- Remove an Element from an Array
let dailyRoutine = ['read','eat','pray','sleep','walk'];
dailyRoutine.pop(); // ['read','eat','pray','sleep']
const removedElement = dailyRoutine.pop();
console.log(removedElement); // sleep
console.log(dailyRoutine); // ['read','eat','pray']

dailyRoutine.shift(); // begin
console.log(dailyRoutine); // ['eat','pray']


// 17.6- Array Length
const dailyActivities = [ 'eat', 'sleep'];
console.log(dailyActivities.length); // 2

// 17.7- Some Array Methods
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]


// 17.8- Working of JavaScript Arrays
let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]


// 18- JAVASCRIPT MULTIDIMENSIONAL ARRAY

// 18.1- Write a Multidimensional Array
const data = [[1,2,3],[4,5,6],[7,8,9]]

let studentsData = [['Okan',45],['Furkan',56],['Hüma',23]];

let student1 = ['Okan', 20];
let student2 = ['Furkan',21];
let student3 = ['Hüma',22];

let studentsData = [student1,student2,student3];


// 18.2- Access Elements of an Array
let x = [
    ['Okan',20],
    ['Furkan',21],
    ['Hüma',22]
];

console.log(x[0]); // ['Okan',20]

console.log(x[0][0]); // Okan

console.log(x[2][1]); // 22


// 18.3- Add an Element to a Multidimensional Array

// 18.3.1- Adding Element to the Outer Array
let studentsData = [['Furkan',56],['Hüma',23]];

studentsData.push(['Okan',20]);

console.log(studentsData);

// 18.3.2- Adding Element to the Inner Array
let studentsData = [['Furkan',56],['Hüma',23]];
studentsData[1][2] = 'hello';
console.log(studentsData); // [['Furkan',56],['Hüma',23,"hello"]]

// pushing
let studentsData = [['Furkan',56],['Hüma',23]];
studentsData[1].push('hello');
console.log(studentsData); // [['Furkan',56],['Hüma',23,"hello"]]

// use splice
let studentsData = [['Jack', 24], ['Sara', 23],];
// adding element at 1 index
studentsData.splice(1, 0, ['Peter', 24]);
console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]


// 18.4- Remove an Element from a Multidimensional Array
let studentsData = [['Furkan',56],['Hüma',23]];
studentsData.pop()
console.log(studentsData); // [['Furkan',56]]

// 18.4.1- remove the element from the inner array
let studentsData = [['Furkan',56],['Hüma',23]];
studentsData[1].pop();
console.log(studentsData); // [["Furkan", 56], ["Hüma"]]

// using splice
let studentsData = [['Furkan',56],['Hüma',23]];
// removing 1 index array item
studentsData.splice(1,1);
console.log(studentsData); // [['Furkan',56]]



// 19- JAVASCRIPT STRINGS

const name1 = 'Okan';
const name2 = "Okan";
const name3 = `Okan`;

const name = 'My name is "Okan".';
const namee = 'My name is 'Okan'.'; // error



// 19.1- Access String Characters
const a = 'hello';
console.log(a[4]); // "o"

const b = 'hello';
console.log(b.charAt(4)); // "o"


// 19.2- JavaScript Strings are immutable
let a = 'hello';
a[0] = 'H';
console.log(a); // "hello"

let b = 'hello';
b = 'Hello'
console.log(b); // "Hello"


// 19.3- JavaScript is Case-Sensitive
const x = 'd';
const y = 'D';
console.log(a === b); // false


// 19.4- JavaScript Multiline Strings
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'


// 19.5- JavaScript String Length
const a = "Hüma";
console.log(a.length); // 4


// 19.6- JavaScript String Objects
const a = 'hello';
const b = new String('hello');

console.log(a); // "hello"
console.log(b); // "hello"

console.log(typeof a); // "string"
console.log(typeof b); // "object"


// 19.7- JavaScript String Methods
const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); // "el"


// 19.8- JavaScript String() Function
const x = 438; // number
const y = true; // boolean

//converting to string
const result1 = String(x);
const result2 = String(y);

console.log(result1); // "438"
console.log(result2); // "true"

// 19.9- Escape Character
const name4 = 'My name is \'Okan\'.';
console.log(name4); // My name is 'Okan'.




// 20- JavaScript for...in loop

// Example - 1
for (key in object) {
    // body of for...in
}

const student = {
    name : "Okan",
    class : 12,
    age : 17
}

for (let key in student) {
    console.log(`${key} => ${student[key]}`);
}


// Example - 2
const salaries = {
    Hüma : 24000,
    Okan : 34000,
    Furkan : 55000
}

for (let i in salaries) {
    let salary = "$" + salaries[i];

    console.log(`${i} : ${salary}`);
}


// 20.1- for...in with Strings
const string = 'coding';

for (let i in string) {
    console.log(i) // 0,1,2,3,4,5
    console.log(string[i]); // c,o,d,i,n,g
}

// 20.2- for...in with Arrays
const arr = ['code',3,'JavaScript'];

for (let x in arr) {
    console.log(x); // 0,1,2
    console.log(arr[x]); // code,3,JavaScript
}



// 21- JAVASCRIPT NUMBER

const a = 3;
const b = 4.15;

console.log(typeof a); // number
console.log(typeof b); // number

const a1 = 5e8;
console.log(typeof a1); // number
console.log(a1); // 500000000

const b1 = 5e-5;
console.log(typeof b1); // number
console.log(b1); // 0.00005

const a = 0xff;
console.log(typeof a); // number
console.log(a); // 255

const b = 0x00;
console.log(typeof b); // number
console.log(b); // 0


// 21.1- + Operator with Numbers
const a = 5 + 8;
console.log(a) // 13

const a1 = '5' + 8;
console.log(a1) // 58

const a2 = '5' - 2;
console.log(a2) // 3

const a3 = '5' * 2;
console.log(a3) // 10

const a4 = '5' / 2;
console.log(a4) // 2.5


// 21.2- JavaScript NaN
const a = 4 - 'hello';
console.log(a); // NaN

const a1 = isNaN(9);
console.log(a1); // false

const a2 = isNaN(4 - 'hello');
console.log(a2); // true

const a3 = 4 - 'hello';
console.log(a3); // NaN
console.log(typeof a3); // "number"


// 21.3- JavaScript Infinity
const a = 3 / 0;
console.log(a); // Infinity

const a1 = -3 / 0;
console.log(a); // -Infinity


// 21.4- JavaScript BigInt
// BigInt value
const value = 900719925124740998n;

// Adding two big integers
const value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"


// 21.5- Precision Problems
// decimal numbers can't be represented in binary form exactly
const a = 0.1 + 0.2;
console.log(a); // 0.30000000000000004

// solution
const a = (0.1 * 10 + 0.2 * 10) / 10;
console.log(a); // 0.3

// solution 2 
const a = 0.1 + 0.2;
console.log(a.toFixed(2)); // 0.30


// Integers are accurate up to 15 digits
const a = 9999999999999999
console.log(a); // 10000000000000000


// 21.6- Number Objects
const x = 32;
const y = new Number(32);

console.log(x); // 32
console.log(y); // 32

console.log(typeof x); // Number
console.log(typeof y); // object


// 21.7- JavaScript Some Number Methods
const a = 12;
console.log(Number.isInteger(a)); // true

const b = NaN;
console.log(Number.isNaN(b)); // true

const d = 5.1234;
console.log(d.toFixed(2)); // 5.12

// 21.8- JavaScript Some Number Properties
// largest possible value
const a = Number.MAX_VALUE;
console.log(a); // 1.7976931348623157e+308

// maximum safe integer
const a = Number.MAX_SAFE_INTEGER;
console.log(a); // 9007199254740991

// 21.8- JavaScript Number() Function
const a = '42'; // string
const b = true; // boolean

//converting to number
const result1 = Number(a);
const result2 = Number(b);

console.log(result1); // 23
console.log(result2); // 1