// 20-Promises Time:7:51PM Dt:05/02/24

// 1. Code Example of Callbacks and Promises
// ->Promises are used to handle async operations in js.
// ->how code works before and after promises?

// eg-1: code without promises

// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function () {
//     proceedToPayment(orderId);
// });


// createOrder - takes the cart item and will return us order details.
// ->it will create a order in database and it will create order id. order id is returned by createOrder api.

// ->proceedToPayment(orderId) -> it takes order id and proceed to payment page.
// ->createOrder(cart) and proceedToPayment(orderId) api's are asynchronous.
// ->they are dependent on eachother.
// ->call backs are used to handle this situations.
// ->api's are wrapped in function and pass to other function as call back functions.

// ->it is reposiblity of createOrder api to create and then call proceedToPayment callback function once the order is created with order id.

// ->this how async operations are handled using callbacks
// ->there is very important issue with this code.
// ->the issue is inversion of control.

//=>1.1 Inversion of control
// ->we have passed proceedToPaument callback function to createOrder api and we are expecting  order is created and then call proceedToPaument callback function once the order is created with order id.
// ->what if it never calls callback function?
// ->what if it may calls twice?
// ->createOrder api may be in some other service, can be written by some developer, team or intern.
// ->we can't blindly trust this api's. it is risky
// ->passing callback function like this isn't realiable.
// ->we are giving control of our program to other part of our code which we are not aware of.
// ->now this not confident way of handling code.
// ->this type of situations are handled by promises.

//=>1.2 handling situations using promises
// ->this type of situations are handled by promises
// ->api's are designed in such a  way that this function will no longer callback functions but it just take some details.

// eg-1:
//->createOrder api will no longer take callback function but it will just take cart details and it will return us promise.
// ->promise is captured or collected in variable

// const promise = createOrder(cart);

// ->whenever above line is executed createOrder api will return promise.
// ->Assume promise as just like empty object with data value in it.
// {data:value}
// ->data hold whatever createOrder returns.
// ->createOrder api is async operation. it will take some time to execute. we don't know how much time it will take. as soon as it is executed it will return object with a data which is udenfined property or value.
// =>{data:undefined}
// ->undefined means empty value.

// ->after sometime it will create an order and it will return order details and fill object at later point of time.
// =>{data:orderDetails}


// 2. Promise.then function
// ->what will happen once order details and data is recieved.
// ->now callback function is attached to promise.
// ->now "then" function is used over promise.
// ->this is the function available over the promise object.
// ->callback function is attached to promise using "then" function.
// ->once data is filled in promise object then callback function attached to promise object is automatically.


// eg-1: code with promises
// const promise = createOrder(cart);
//{data:undefined}    ->when above line is executed
//{data:orderDetails} ->After some time order created and exact data will be filled in promise object.
// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

// eg-2: code without promises
// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function () {
//     proceedToPayment(orderId);
// });


// ->code with promises is lot better than code without promises.

// 3. Callbacks vs Promises
// ->code with promises is lot better than code without promises.
// 1. Callbacks
// ->Passing a function
// ->In case of code with callback or (without promises) callback function is passed to another function as an argument and blindly trusting on that function(createOrder api).
// ->createOrder api will call whenever it wants.



// 2. Promises
// ->attaching a function.
// ->In case of code with promises callback functions are attaching to promise object.
// ->In this case we have control of program with us.
// ->createOrder api will only do it's job.
// ->it create an order and it will fill the promise object with the data(orderId).
// ->as soon as this promise object fill with the data it will automatically call callback function back.

// 4. Importance of Promises
// ->Promises gives trust that it will call callback function whenever there is data inside promise object.
// ->Promises handles these type of issues beautifully below
// ->what if it never calls callback function?
// ->what if it may calls twice?
// ->as soon as data inside promise it will call the function definitly or 100% of the time.
// ->that was the guarantee given by Js and it will call just once.
// ->we also have control of code with us and we are not passing it to external function.

// 5. Promise Object in Browser
// ->Promise object looks like.
// ->use fetch() function to see promise api.
// ->fetch() function -  it is an api given browser to us to make external calls.
// ->fetch function returns promise.
// ->using fetch() function to make a api call to github servers to get user info with us.

// eg-1:user info is fetched from this api
// const GITHUB_API = "https://api.github.com/users/ashishpaul99"

// const user = fetch(GITHUB_API);
// console.log(user);

// ->fetch() function returns a promise.
// ->promise is captured in object user and pass github api in fetch function.
// ->as soon line 125 executed promise object is retruned to user variable.

// =>debugging above code
// ->go to source and add debuger on line
//     const user=fetch(GITHUB_API);


// ->before line "const user = fetch(GITHUB_API);" execute the promise result is undefined.
// =>scope
// user: Promise
// [[Prototype]]    : Promise
// [[PromiseState]] : "pending"
// [[PromiseResult]]: undefined
// ->After line "const user = fetch(GITHUB_API);" executed fetch will return promise.
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Respo

// 6. Deep dive into Promise State
// =>there are two things
// a. state of the promise
// b. result of the promise

// a. state of the promise
// ->it tells state of the promise.
// ->intially promise will be in pending state.
// ->after getting data promise state changes to fullfill state.
// ->there are thress states of promise
// 1. pending
// 2. fullfilled
// 3. rejected


// eg:
// 1.1 before line "const user = fetch(GITHUB_API);" executed the state of promise state is pending and result is undefined
// =>scope
// user: Promise
// [[Prototype]]    : Promise
// [[PromiseState]] : "pending"
// [[PromiseResult]]: undefined

// 1.2 After line "const user = fetch(GITHUB_API);" executed fetch will return promise.
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Respo


// ->once line "const user = fetch(GITHUB_API);" is executed fetch will return promise and console log will log the promise.
// eg:
const GITHUB_API = "https://api.github.com/users/ashishpaul99"

const user = fetch(GITHUB_API);
console.log(user);

// Output:
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response


//->After line "console.log(user)"  it is logging pending and after some time promise state changes to fullfilled.
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response

// =>why promise promise state is pending and fullfilled after line console.log(user).

// ->At line console.log(user) the promise object is in pending state. js engine will not wait for anything it executes quickly.

// ->At line "const user = fetch(GITHUB_API);" fetch returns a promise and it is in pending state. it take sometime to get the data and fill it back to get fullfill.
// ->js will not wait for excution of fetch() function it goes to nextline. that why it shows promise is pending. it goes and prints console log into the console. that why promise is pending.
// ->after some point of time eventually data comes into promise object. then state of promise changes to fullfilled and promise result changes to response from undefined.




//// b. result of the promise
// ->result will store whatever data fetch() method returns.



// eg-2: Attaching call back function to promise
// const GITHUB_API = "https://api.github.com/users/ashishpaul99"

// const user = fetch(GITHUB_API);
// console.log(user);

// // data is given to function
// user.then(function (data) {
//     console.log(data);
// });

// Output:
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response

// Response {type: 'cors', url: 'https://api.github.com/users/ashishpaul99', redirected: false, status: 200, ok: true, …}

// ->we can do whatever we want in program.
// ->promise object brings lot of trust in this transaction.
// ->js resolve promise one time either it will be sucess or failure.
// ->it can be fullfilled or refjected also.
// ->Promise objects are imutable.
// ->we can pass data which is in promise in code.
// ->no need to worry about someone mutate the data.
// ->we control over promise data.

//7. Promise Interview Question
// 1. What is promise?
// ->Promise object is place holder for a cetain period of time until we receive a value from asynchronus operation.
//    or
// ->The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// ->a container for future value.
// ->it has a value after promise is fullfilled.


// 8. Promise Chaining in JavaScript
// ->Inversion of control problem is solved by promises.
// ->there is one more issure with call back. it is call back hell.
// 1. creating orderId
// 2.proceed to payment
// 3.show order summary
// 4. update wallet


// eg-1:
// const cart = ["shoes", "pants", "kurta"];
// api.createOrder(cart, function () {
//     proceedToPayement(orderId,function(){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//        });
//     })
// });

// ->In this case lot of api are depending on each other.
// ->it tends fall into callback hell. this is known as calll back.
// ->code grows horizontally instead of vertically.
// ->these code is unmaintable and it looks ugly with lot of api's, nested statements.
// ->callback hell issue can avoided by using promises.
// ->promises comes with important feature of promise chaining.

// eg-2:writing code using promises
const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
promise.then(function (orderId) {
    return proceedToPayment(orderId)
}).then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
}).then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
});
// console.log(promise);

// or .
createOrder(cart).then(function (orderId) {
    return proceedToPayment(orderId);
}).then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
}).then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
});

// ->createOrder api turns into promise.
// ->after proceeding to payments we have to show order summary by attacing another call back function to promise object.

// 9. Common mistake while Promise Chaining
// ->In promise chaining we use then function. the data is piped in promise chaining.
// ->we want data to flow in the whole chain.
// ->response of create order pass into proceedToPayment() function and resposne of proceedToPayment() function  passed to showOrderSummary() function and response of showOrderSummary() function down the chain.
// ->we always return a promise from in promise when we are chaining it. that's when will get data properly. 
//1. lot times we forget write return statements while using promise chainig.
// eg:
createOrder(cart).then(function (orderId) {
    return proceedToPayment(orderId);
}).then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
}).then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
});


//2. some developers will use arrow function. some find it much more readable.
// eg:writing code with arrow function
createOrder(cart).then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo)
    );

// ->promises chaining helps to get out of call back hell.
// ->it give so many amazing functionality.
// ->promises makes code cleaner and beautiful.
// ->Promises generated trust in the transaction.


// 10. Recap of the
//->How we can handle async code using callback.
// ->While using callback we come across inversion of control issue. when we are passing a function indside other function. control of code give to someother api.
// ->inversion of control is handled by promises.
// ->Promise object is eventually filled with result of aync operation and we don't pass any function to other function but we attach a callback functio to promise object. whenever data is inside promise object or promise is resolved then callback function automatically called by promises.
// ->promises give guarantee and trust in whole transaction.
// ->promise is resolved just onece.
// ->promises have three states
// 1. pending
// 2. rejected
// 3. fullfilled

// ->Promises can be passed anywhere in code with out caring about mutability of it.
// ->promises are mutable and they cannot be altered.
// ->In order to handle callback issue we use promise chaining.
// ->promise has to be returned by using return keyword other it lead data loss.
// ->fetch function created promise and returned it.

// 11. Teaser of the Next Video
// ->how we can create a promise and return from createOrder api.
// ->how we can create a new promise and return it.
// ->as a developer creating promise and send it around people to generate trust in transaction.

// 12. Homework of this episode
// 1. What is the promise?
// 2. How promises helps you?