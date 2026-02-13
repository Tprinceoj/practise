/*{let x=5;
if (x > 10) {
    console.log("invalid")
}
else {
    console.log("X is less than 10")
}}

{
let arr =[1,2,3,4,5]
for (let i = 0; i<arr.length; i++){
    console.log(arr[i])
}}

{let obj = {name: "tosin" , age: 20}
console.log(obj.name)}

*/
//Declare an array of numbers
//let numbers = [];
// Log the array to the console
// Log the length of the array to the console

//{let numbers =[1,2,3,4,5]
//console.log(numbers)
//console.log(numbers.length)}


//Declare an object with name and age properties
//let person = {};
// Log the object to the console
// Log the value of the name property to the console

//{let person ={name:"Tosin", age:89}
//console.log(person.name);}

//Prompt user for two numbers and an operator
//let num1 = prompt("Enter the first number: ");
//let num2 = prompt("Enter the second number: ");
//let operator = prompt("Enter the operator (+, -, *, /): ");
// Use variables and conditional statements to perform the calculation

/*
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let operator = prompt("Enter the operator (+, -, *, /): ");

num1=Number(num1)
num2=Number(num2)
let result;
if (operator==="+"){
    result =num1+num2;
}
else if  (operator==="-"){
    result=num1-num2;
}
else if (operator==="*"){
result=num1*num2;
}
else if (operator==="/"){
    if (num2===0){
        console.log("error cannot be divided by 0")
    } else{
        result=num1 / num2;
    }

}
else {
    console.log("invalid operator")
}
if (result !== undefined) {
  console.log("Result:", result);
}

*/


//javascript
// Prompt user for their age
//let age = prompt("Enter your age: ");
// Use a conditional statement to make a decision


/*let age = prompt("Enter your age: ")
age=Number(age)
if (age >=18){
    console.log("you qualify to vote")
}
else{
    console.log(" you are not qualify")
}
    */
   


/*
let number = prompt("Enter number:");
number = Number(number);

let result;

if (isNaN(number)) {
    result = "Invalid input";
} 
else if (number >= 100) {
    result = "Too big";
} 
else {
    result = "It's okay";
}

console.log(result);
*/


/*

let number=prompt("enter number")
number=Number(number)
let result;

if (isNaN(number)){
    result=("In valid number")
}
else if (number>=50 && number<=100){
    result=("medium")
}
else if (number>=0 && number<=49){
    result=("small")
}
else if (number<0){
    result=("negative")
}
else {
    result="too big"
}
document.getElementById("demo").innerHTML=result


*/


function checkNumber(){
    let input=document.getElementById("demo").value;
    let number=Number(input);
    let result=document.getElementById("result");
    if (isNaN(input)){
        result.textContent=("invalid number")
    }
    else if (number>100){
        result.textContent=("too large")
    }
    else if (input>=50 && input<=100){
        result.textContent="medium"
    }
    else if (number>=0 && number<=49){
        result.textContent="too small"
    }
    else if (number<0){
        result.textContent=("negative number")
    }

}