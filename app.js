// Basic functions

function nameOfFunction(parameter){
    return "this parameter can be changed dynamically as long as it matches my word in between my parenthesis: "+parameter;
}

const storingInVariable = nameOfFunction("Hello World")

// Anonymous functions
// https://www.w3schools.com/jsref/dom_obj_event.asp
document.querySelector('h1').addEventListener('click', () => alert("I've been clicked!"))

const anonymousFunction = (parameter) => {
    return "Hey there"
}


//  Arrow functions

// const arrowFunk = (whatever) => {
//     return "I'm an arrow function: "+whatever
// }

const arrowFunk = whatever => "I'm an arrow function: " + whatever
const arrowFunk1 = () => "I'm an arrow function: "
const arrowFunk2 = (whatever, again) => "I'm an arrow function: " + whatever + again

// console.log(arrowFunk("Hello World"))

// Parameters

const multiply = (num1 = 2, num2 = 2) => num1 * num2

// console.log(multiply(2, 3))
// console.log(multiply(5, 5))
// console.log(multiply(10, 10))
// console.log(multiply(100, 34));

// console.log(multiply(1000));