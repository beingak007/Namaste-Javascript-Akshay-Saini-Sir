// eg-1:
// var x=7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// console.log(x);
// getName();

// Output:
// 7
// Namaste Javascript

// eg-2:trying access x and getName() before we intialize them.
// ->In many programming languages it results in error.

// console.log(x);  //undefined
// getName();       //Namaste Javascript

// var x=7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// Output:
// undefined
// Namaste Javascript

// eg-3:

// getName();
// console.log(x);

// function getName(){
//     console.log("Namaste Javascript");
// }

// Output:
// Namaste Javascript
// x is not defined

// eg-4:

// getName();
// console.log(x);
// //trying to print whole function 
// console.log(getName); 

// var x=7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// Output:
// Namaste Javascript
// undefined
// ƒ getName(){
//     console.log("Namaste Javascript");
// }

// =>1. Hoisting Explaintion 
// ->before this code get executed js allocates memory for the variables and functions in the code.

// eg-1:
// var x=7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

// Output:
// Namaste Javascript
// hoisting.js:71 7
// hoisting.js:72 ƒ getName(){
//     console.log("Namaste Javascript");
// }

// eg-2:
// getName();
// console.log(x);
// console.log(getName);

// var x=7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// Output:
// Namaste Javascript
// undefined
// ƒ getName(){
//     console.log("Namaste Javascript");
// }

// eg-3:removing variable x
// ->x will not be present in scope. so js throughs error. x is not defined.

// getName();
// console.log(x);
// console.log(getName);


// function getName(){
//     console.log("Namaste Javascript");
// }

// eg-4:
// ->It says getName is not a function.
// ->arrow function behaves like variable.
// ->undefined is given to getName.
// ->getName1 is a function.in this case meomry is allocated as whole function.
// ->getName, getName2 functions behave like variables. in this cases it allocates the memory with place holder undefined.



// =>Execution context
// Memory                   |   Code
// getName: undefined
// getName1: ƒ getName1()
// getName2: undefined



// getName1();
// getName2();
// getName();

// console.log(x);
// console.log(getName);

// function getName1(){
//     console.log("getName1")
// }

// var getName2=function(){
//     console.log("gertName2");
// }

// arrow function
// var getName= () =>{
//     console.log("Namaste Javascript");
// }

// Output:
// getName2 is not a function


// 2. How execution works call stack for this code? 
// var x=7;
// function getName(){
//     console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

// Output:
// Namaste Javascript
// hoisting.js:158 7
// hoisting.js:159 ƒ getName(){
//     console.log("Namaste Javascript");
// }

// 1. Whenever js code runs global execution context is created and put in call stack
// |               |
// |               |
// |               |
// |     GEC       |          
// |_______________|

// 2. when function is invoked new execution context is created and pushed to call stack.
// let new execution context  be E-1

// |               |
// |               |
// |      E-1      |
// |     GEC       |          
// |_______________|


// ->After execution is completed whole call stack will be empty.











