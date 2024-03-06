// 8. let & const in JS 🔥Temporal Dead Zone
// 1. Hoisting of let & const in JavaScript
// ->let and const are hoisted.
// ->they in temporal dead zone for time being.

// 2. Code example of let declaration hoisting in JS
// eg-1:
// console.log(b); //undefined
// let a=10;
// var b=100;

// ->b can be accessed before intializing it in JS
// ->because of hoisting the value of b is undefined.

// eg-2:a cannot be accessed before intialization.

// console.log(a);  //Cannot access 'a' before initialization
// let a=10;
// var b=100;

// ->In this case a cannot be accessed before intialization.

// eg-3:a can be accessed after intializing it.
// let a=10;  
// var b=100;
// console.log(a); //10


//3. Behind the Scenes of let & const hoisting in browser
// ->In case of let and const they are also allocated memory that is called hoisting but they are stored in different memory space than global.
// ->they cannot before intializing them with a value.

// ->checking variable a is hoisted.
// eg-1:

// const c=10;
// let a=10;  
// var b=100;
// console.log(a);

// ->debug the code line before code starts.
// ->even before executing single line of code js allocated memory to a.
// ->a and b are in scope
// ->In case of a(let a) it is not in global.
// ->In case of b(var b) it is in global scope.
// ->Memory was assigned to b to the var declaration and variable b is attached to global object.
// ->In case of let and const they are also allocated memory that is called hoisting but they are stored in different memory space than global.

// eg:
// Script
// a: <value unavailable>
// c: <value unavailable>

// Global
// b: undefined

// ->they cannot before intializing them with a value.
// ->after executing lie let a=10 then value is stored in a.
// ->now identifier a is pointed to 10.
// ->after execution a can be accessed.

//=>4. Temporal Dead Zone in JavaScript
// ->Temporal dead zone is the time since when let variable was hoisted and till it is intialized some value.
// ->Time between is called temporal dead zone.
// ->before intializing a let or const variable it is stored in different memory space than global this phase is known as temporal dead zone.
// ->when let or const varaible is intialized with value then temporal dead zone ends.
// ->Whenever varaible is accessed inside temporal dead zone it gives refernce error.
// ->a variable cannot be accessed when it is in temporal dead zone.

// eg-1:when a is accessed in temporal dead zone it results in error
// console.log(a);

// let a=10;  
// var b=100;

// Output:
// Uncaught ReferenceError: Cannot access 'a' before initialization

// =>5. Reference Error explained in depth
// ->In case of not defining varaible and accessing variable inside temporal dead zone it given reference error.

// eg-1:x is not defined in code. it gives error
// ->x was not there in current scope.
// console.log(x);

// let a=10;  
// var b=100;

// Output:
// Uncaught ReferenceError: x is not defined

// eg-2:
// ->accessing variable inside temporal dead zone it gives reference error.
// console.log(a);

// let a=10;  
// var b=100;

// Output:
// Uncaught ReferenceError: Cannot access 'a' before initialization

//=>6.  Relation of global object and variables var, let & const

// ->window is a global object which is created by JS.
// ->var declarations are attached to window object.
// ->var declarations are accessed with "this" keyword.
// ->let and const declarations are not attached with window Object. 
// ->let and const declarations are not accessed with "this" variable also.
// ->let and const are strict than var.

// eg-1:
// let a=10;  
// var b=100;
// console.log(window.b); //100
// console.log(window.a); //undefined
// console.log(this.b);   //100
// console.log(this.a);   //undefined

// Output:
// 100
// undefined

// ->b is attached with window object.
// ->a is not attacted with window Object.

// =>7. Duplicate redeclaration of let and const variables
// ->re-declaration is not allowed. it results in syntax error.
// ->redeclaration is possibel in case of var declarations.

// eg-1:
// let a=10;
// let a=100;

// Output:
// Uncaught SyntaxError: Identifier 'a' has already been

// eg-2: -> same name cannot be used in same scope.
// let a=10;
// var a=100;

// Output:
// Uncaught SyntaxError: Identifier 'a' has already been

// eg-3:
// var a=10;
// var a=100;
// ->redeclaration is possibel in case of var declarations.


//=>8. Important Difference between let and const 
// ->Const is even more strict than let.

// 1. In case of let declarations we can declare them and intialize later.
// eg-1:
// let a=10;
// a=10;
// console.log(a); //10


// 2. In case of const declarations we cannot intialize later.
// ->const declarations are intialized while declaring them.
// ->const varaibles cannot intialized after declaring them.
// -> it gives syntax error if they are intialized after declared them.
// eg-1:
// const a=10;
// console.log(a);


//=>9. Syntax Error in JavaScript
// 1. Syntax error
// ->code doesn't even run..
// -> it says invalid js code.


// eg-2: it gives syntax error if they are intialized after declared them.
// ->const varaibles cannot intialized after declaring them.
// ->const declarations are intialized while declaring them.

// const a;
// a=100;
// console.log(a);

// Output:
// Uncaught SyntaxError: Missing initializer in const declaration 

//=>10. Type Error in JavaScript
// A TypeError in JavaScript occurs when an operation is performed on a value of the wrong data type.

// ->assigning a const variable results in type error.
// ->a is const type.

// eg-1:
// const a=10;
// a=1000;

// Output:
// Uncaught TypeError: Assignment to constant variable.

//=>11. Difference between SyntaxError vs TypeError vs ReferenceError
// 1. TypeError
// A TypeError in JavaScript occurs when an operation is performed on a value of the wrong data type.

// ->assigning a const variable results in type error.
// ->a is const type.

// eg-1:
// const a=10;
// a=1000;

// Output:
// Uncaught TypeError: Assignment to constant variable.


// 2. Syntax Error
// A syntax error is a type of error that occurs when the structure of your code is incorrect or does not follow the rules of the programming language.
// ->missing syntax results in syntax error.

// eg-1:
// const a;

// Output:
// Uncaught SyntaxError: Missing initializer in const declaration 

// ->a should be intialized after declaring it.

// 3. Reference Error
// ->whenever js tries to find out a variable in meomory space which is not present then it results in refernce error.
// eg-1:
// let a=10
// console.log(x);

// Output:
// Uncaught ReferenceError: x is not defined

// ->Accessing variable in temporal dead zone results in reference error.
// eg-1:
// console.log(a);
// let a=10

// Output:
//  Uncaught ReferenceError: Cannot access 'a' before initializatio

// =>12. Difference between var, let or const?
// 1. Const
// ->use const at first place.
// ->In order store constant value use const to declare a variable.
// ->unwanted error can be prevent.

// 2. let
// -> by using let many unwanted error can be prevented like undefined.

// 3. var
// ->there may be cases var can be used. use it consiciously.


//13. How to avoid Temporal Dead Zone
// ->temporal zone leads to unexpected errors sometime.
// ->to avoid temporal dead zone always put delcarations and intializations on the top of the scope so that as the code starts it hits the intialization part at he first then it goes into logice.
// ->we are shrinking the temporal dead zone to zero while movind declarations and intialization on the tope of the scope.
