// 13- Callback Functions in JS ft. Event Listeners 🔥
// 1. What is a Callback Function in JavaScript?
// ->functions are first class citizens in js.
// ->a function can be passed as argument to other function is called as call back function.

// 2. Advantages of Callback
// ->call back functions are powerful in js.
// ->it gives us access to the asyncronous world in synchronous single threaded language.
// ->js is single threaded language. it can do one thing at a time in a specific order.
// ->due to call backs we can do async things in js.

// eg-1:
// ->function y is call back function.
// ->it is upto x when it want to call y.
// ->this function y called sometime in a code.
// function x(){

// }

// x(function y(){

// });

// eg-2:
// ->setTimeout function takes call back function.
// ->function passed to setTimeout function is call back funtion.
// ->it calls function after certain time.
// ->setTimeout takes function and store it in seperate space attach timer to it.
// ->js will not wait for setTimeout function

// setTimeout(function(){
//     console.log("timer")
// },5000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });


// 3. Callback  - dev tools  Demo in browser
// ->keep debugger at line 32  and line 41 and run the code.
// ->observe the call stack.


// 4. Blocking Main Thread in JavaScript
// ->everything on page is executed through call stack only.
// ->If any operation blocks the call stack that is called the blocking the main thread.
// ->main thread should not be blocked.
//  ->we have to use asyn operations for the things whihc takes time like setTimeout function. 
//->if js does not have first class and we did not have call back functions then we could not pass this functions to another function then we could not have been do asynchronous operations.
// ->Using web api, setTimeout and the call function aynchronous operations can be achieved.


// 5. Creating an Event Listeners in JavaScript
// 1. What are event listeners?
// ->An event listener is a function in JavaScript that waits for an event to occur then responds to it. JavaScript is a programming language that developers use to make interactive webpages.

// ->on click it's call function.
// ->click button is picked and event listener is added to it.
// ->event listener is attached to buttons.
// ->it call call the function after that even happens.
// ->if event happens then call function automatically come into call stack.

// eg-1:
// document.getElementById("clickMe").addEventListener("click",function click(){
//      console.log("Button Clicked")
// });

// ->.put debugger inside function and see in call stack.

// =>call stack
// ->click

// 6. Closures along with Event Listeners
// ->Printing how many time button is clicked.

// eg-1:
// let count=0;
// document.getElementById("clickMe").addEventListener("click",function(){
//     console.log("Button clicked",++count);
// })

// Output:
// Button clicked 1
// Button clicked 2
// Button clicked 3
// Button clicked 4
// Button clicked 5

// alter
// ->make a closure and that count should be secured.
// ->we use closure for data hiding.
// ->closure is formed and attach eventlistener to button.
// ->call back function has access to the closure.
// ->go to elements and click on button and element.
// ->inside button we can see handlers


// eg-2:
// function attachEventListeners(){
// let count=0;
// document.getElementById("clickMe").addEventListener("click",function click(){
//     console.log("Button clicked",++count);
// })


// }

// attachEventListeners();


// 7. Garbage Collection & remove Event Listeners
// ->why event listeners are removed.
// ->event listeners are heavy.
// ->Whenever a event listener is attached it formss a closure even call stack is empty.
// ->that's the reasone event listeners are heavy.
// ->that's the reason event listeners are removed when we are not using them.
// ->if page has more event listeners then our page can go slow.
// ->So many closure sitting in memory of all there scopes and call backs.
// ->good practice to free up space 
// ->when the event listeners are removed all the variables which are held by closure will garbage collected.

