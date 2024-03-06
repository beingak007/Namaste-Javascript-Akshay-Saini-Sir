//=>1. What is closure?
// ->A functions binds together with it's lexical environment.

// or

// ->function along with it's lexical scope together bundle is called closure.
// ->function along with it's lexical scope together forms a closure.


// ->Inside y() it forms a closure with the varaible
// which were a part of x lexical scope.
// ->the function y() was bind to the variables of x.
// ->it forms a closure and it has access to parent lexical scope.

// eg-1:
// function x(){
//     var a=7;
//     function y(){
//          console.log(a); //7
//     }
//     y();
// }
// x();

// Output:
// 7

//=>Scope
// ->Local
// this: Window

// ->Closure (x)
// a: 7

// ->Global




//=>1.1 function can given to varaible, it can also given as parameter to the other function and a function can be returned also.
// ->most of the programming languages will not allow functions as Parameters.



// 2. Invoke a function
// ->when x() is called it returns function y.
// ->after returning y() function x() poped out of the call stack.

// 3. Closure
// ->function along with it's lexical scope together bundle is called closure.
// ->When function is returned from other function they still maintain there lexical scope.
// ->they remember actually where they where present.
// ->thought x is not existed in call stack y function remembers its lexical scope.
// ->they still mintains their parent lexical scope.
// ->function y() still maintains parent lexical scope(x() lexical scope).
// ->When a function is returned it's not just return function code but it returns closure of the function.


// eg-1:
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x(); //after this x() get poped out of call stack.
// console.log(z);

// z();  //7

// Output:
// ƒ y(){
//     console.log(a);
// }
// 7


// alter
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }
// }
// // function is returned 
// var z = x();
// console.log(z);
// z() //7

// Output:
// ƒ y() {
//     console.log(a);
// }
// 7


// 4. Corner Cases
// ->when function was returned it comes with corener cases.

// eg-1:
// ->a does not refere to value.
// ->a is reference which is returned.
// ->function along with the refernce to the varaible.
// ->function remembers the Reference.
// ->when it is running z() it is trying to find reference a. a point to 100.

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }

//     a=100;
//     return y;
// }

// var z=x();
// console.log(z);
// z();


// eg-2:
// ->Y forms a closure

// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x()
// }
// var d=z();
// console.log(d);

// =>Scope
// ->Local
// Return value: undefined
// this: Window
// ->Closure (x)
// a: 7
// ->Closure (z)
// b: 900
// ->Window


// 5. Uses of closures
// 1. Modules Design Pattern
// 2. Currying
// 3. Functions like once
// 4. memorize
// 5. maintaining state in async world
// 6. setTimeout
// 7. Iterators
// and many mores
