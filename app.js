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

// console.log(arrowFunk("Hello World"))

