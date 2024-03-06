// 24-this keyword in JavaScript    Date:17/02/24  time:9:55 AM

//1. Introduction
// ->this keyword behaves very differently when it is in different circumstance.
// ->this keyword behaves different when it is in function, global space, arrow function and nested function etc.


// 2. 1:50 What will I cover?
// this in global space
// this inside a function
// this in strict mode - (this substitution)
// this this value depends on how this is called (window)
// this inside a object's method
// call apply bind methods(sharing methods)
// this inside arrow function
// this inside nested arrow function
// this inside DOM


// 3. 2:48 Global space
// ->In JavaScript, the global scope is the scope that is available throughout the entire program. Variables declared in the global scope can be accessed from anywhere in the program, including inside of functions.

// eg-1:
// this         //->it is in global space
// function x() {
//     // this  --> "this" is in funcion space
// }


// 4. 4:00 Global Object or window object
// ->the value of 'this' keyword will be global object.
// ->this keyword in global space will always have the value of global object.
// ->'this' keyword in global space respresnts the global object.
// ->js run on mobile, watches, other devices.
// ->wherever js runs there is js run time environment.
// ->Inside browser global object is differnt and global object inside node is different.
// ->global object can be different wherever it runs.
// ->In browser the value of the "this" kwyword is window and in node js it is global.

//1. this keyword value in browser -  window
//2. this kwyword value in Node.js - global

// ->the value of "this" keyword  is global object(interview answer)

// eg-2:
// console.log(this); // value of 'this' keyword -> it prints window object
// function x() {
//     console.log(this);
// }
// x();


// 5. 6:34 Function
// ->the value of "this" keyword in function is window but it is different when compare with "this" kwyword value of global space.

// eg-1:
// console.log(this);
// function x() {
//     console.log(this);
// }
// x();

// 6. 8:08 Strict Mode
// ->strict mode has some stricter rules for javascript.
// ->by using "use strict" in top of the file we can go inside srict mode.
// ->"this" kwyword works differently in strict and non strict mode.
// ->In strict mode the value of "this" keyword in global sapce is global object but the value of "this" kwyword inside a function is undefined.
// ->In Non-Strict mode the value of "this" keyword in global space and inside function is global object.
// ->the value "this" keyword inside a function depends on strict and non-strict mode.
// 1. strict mode - the value of "this" keword inside function undefined.
// 2. Non strict mode - the value if "this" keyword inside function it is global object.

// eg-1: Non-strict mode
// console.log(this);     //window object
// function x() {
//     console.log(this);  //window object
// }
// x();

// Output:
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// eg-2: Strict mode
// "use strict"
// console.log(this);    //window object
// function x() {
//     console.log(this); //undefined
// }
// x();

// Output:
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//  undefined


//6.1 why "this" keyword behaves like this inside strict mode?
// ->there is phenomena known as "this substitution".
// ->According to "this substution" if the value of "this" keyeord is undefined or null then "this" will be replaced with global object.
// ->if the value of "this" keyword is undefined or null then js will replace with global object only in non-strict mode.

// 7. 11:44 Value of Substitution
// ->this inside non-strict mode - this substitution
// ->the value of "this" keyword inside a function is undefined but because js has something known as "this substitution" the value of "this" keyword becomes equal to global object in Non-strict mode.
// ->In case of strict mode the value of "this" keyword is undefined inside a function.


// 8. 12:40 Value of this keyword
// ->the value of "this" keyword depends on how the function is called.
// ->In non-strict the value of "this" keyword in function is window object.

// eg-1: Non strict mode
// console.log(this);     //window object
// function x() {
//     console.log(this); //window object
// }
// x();
// Output:
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// 9. 14:17 How the function is called
// ->When function is called differently in stirct mode the value "this" keyword will different depends on how function is called.
// ->when function is called without any reference of an object then the value of "this" keyword is undefined.
// ->when function is called with reference of object the value of "this" keyword is  calling object.
// ->when function is called with reference of window object the value of "this" keyword is (wndow object)

// eg-2: strict mode
// "use strict"
// console.log(this);
// function x() {
//     console.log(this);
// }
// x();          //udenfined
// window.x();   //window object (global object)

// Output:
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// 9.1 Conclusion
// 1. In global object the value of "this" keyword is global object.
// ->In browsers it is window object

// 2.In function the value of "this" keyword is depends on strict and non strict mode.
// ->In case of strict mode the value of "this" kwyword in function is undefined.
// ->In case of non strict mode the value of "this" keyword in function is global object.

// 3. the value of the "this" keyword depends on how the function is called.
// ->when function is called without any reference of an object then the value of "this" keyword is undefined.
// ->when function is called with reference of object the value of "this" keyword is  calling object.

// 10. 15:56 value of keyword
//->the value of the "this" keyword depends on how the function is called.
// ->"this" value is determined by how the function is called(runtime binding) - MDN

// 11. 17:28 Difference between function and method
// ->If function as a part of an object then it is known as a method.

// eg-1:
// ->x is method of object obj.
// ->the value of "this" is depends on the function is called.
// ->when x is called using object obj then the value of "this" keyword is this or current object(where method is prsent)
// ->this inside represent the same object.

// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this);
//     }
// }

// obj.x();

// Output:
// {a: 10, x: ƒ}

// eg-2:
// =>Accessing value of key in an object by this keyword.
// const obj={
//     a: 10,
//     x: function () {
//         console.log(this.a);
//     }
// }
// obj.x();

// Output:
// 10

// 12. 20:20 Real life example
// ->three important functions need to know when we talk about this keyword.
// 1. call()
// 2. apply()
// 3. bind
// ->watch full video in channel.

// ->these function are used when methods are shared.

// eg-1:sharing methods between object.
// ->In order to share printName() method function to student2 object by overriding value of "this" keyword.
// ->call() function takes "this" keyword.
// ->inside function "this" keyword is overrided with name of the student in student2 object.



// const student1 = {
//     name: "Jesus",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// student1.printName(); //output:Ashish


// const student2 = {
//     name: "Ashish"
// };

// student1.printName.call(student2); //value of this is student2


// Output:
// Jesus
// Ashish


// 13. 25:13 Override value
// ->value of this is student2
// ->the a value of the "this" keyword can be modified by call(), apply() and bind() method.
// ->All these methods are used to set the value of the "this" keyword.

const student1 = {
    name: "Jesus",
    printName: function () {
        console.log(this.name);
    }
}

student1.printName(); //output:Ashish


const student2 = {
    name: "Ashish"
};

student1.printName.call(student2); //value of this is student2

// Output:
// Jesus
// Ashish





// 14. 28:00 Enclosing lexical content or context
// ->"this" keyword inside arrow function.
// ->arrow function did not have there own "this".
// ->they take the value of the lexical environment where they are enclosed.
// ->arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).
// ->where this object is lexically present in code.
// ->here object is presnt in global space.
// ->"this" keyword inside arrow function will not behaves like inside a function but it will behave like this present in the global space.
// ->the value of the "this" keyword inside arrow function is value of it's lexical context.


// eg-1:
// const obj = {
//     a: 10,
//     // "this" inside method
//     x: function () {
//         console.log(this);
//     },

//     // "this" inside arrow function
//     y: (z) => {
//         console.log(this);
//     }
// }
// obj.x(); //Output:{a: 10, x: ƒ}
// obj.y(); //Output:window object

// Output:
// {a: 10, x: ƒ, y: ƒ}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// 15. 31:55 Recap
// ->arrow function is enclosed inside a another function which is method the this object.
// ->In this case the value of "this" keyword inside arrow function is this object(obj2). because "this" enclosed with the lexical environement of obj.
// ->enclosing lexical context here is function.


// eg-2:
// const obj = {
//     a: 10,
//     x: function () {
//         const y = () => {
//             console.log(this)
//         }
//         y();
//     }
// }
// obj2.x();

// ->"this" keyword in arrow function behaves like as  exactly how it would be in lexical context of obj2

// eg-3:
// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this)
//     }
// }
// obj2.x();

// 16. 37:42 Conclusion
// ->arrow function will not have this binding(it retains the this value of enclosing lexical context).
// ->try to find each words in MDN to explore.
// ->enclosing lexical context.


// 17. 42:04 this keyword in DOM
// ->the value of the "this" keyword Inside DOM is refrence to HTML element.

// eg-1:
// In alert printing the value of this in html code.
// ->when button is click it says
//    [object HTMLButtonElement]
// ->HTMLButtonElement itsleF the value of "this"
// keyword inside button.

// =>code
//  <button onclick="alert(this)">Click Me</button>

// eg-2:
// <button onclick="alert(this.tagName)">Click Me</button>

// ->when button is click it says "Button"

// ->this keyword has different meaning inside classes and constructor.



// 18. this keyword recap
// 1. In global object the value of "this" keyword is global object.
// ->In browsers it is window object

// 2.In function the value of "this" keyword is depends on strict and non strict mode.
// ->In case of strict mode the value of "this" kwyword in function is undefined.
// ->In case of non strict mode the value of "this" keyword in function is global object.

// 3. the value of the "this" keyword depends on how the function is called.
// ->when function is called without any reference of an object then the value of "this" keyword is undefined.
// ->when function is called with reference of object the value of "this" keyword is  calling object.