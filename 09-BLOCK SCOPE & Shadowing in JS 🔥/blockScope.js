// eg-1: it expects a statement.
// if(true)

// Output:
// Uncaught SyntaxError: Unexpected end of input


// eg-2:
// if(true){
//     // Compound statement
//     var a=10;
//     console.log(a); //10
// }

// ->let and const are block scoped.
// ->let and const varaibles are stored in seperate space which is reserved for the block.

// eg-3:
// {
//     var a=10;
//     let b=20;
//     const c=30;
// }

// ->let and const variables are in block. var variables present in global scope.

// eg:debug the code
// =>Block
// b: <value unavailable>
// c: <value unavailable>

// =>Global
// a: undefined


// ->b and c are hoisted and assigned undefined.
// ->these are hoisted and in seperate memory space.
// ->after exection of the code in the block then let and const varaibels are not accessible.

// ->they are not accessible outside the block.
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }
// console.log(a);//10
// console.log(b); //Uncaught ReferenceError: b is not defined
// console.log(c);

//=>3. What is Shadowing in JavaScript
// ->if there is same variable in outside the block similar varaible in the block shadows that varaible.
// ->when the varaible a is accessed then varaible a inside block shadowns the varaible a outside the block.
// ->both the variables a outside block and inside blocks refers to the same global space.
// ->variable a inside and outside a are global scoped.

// eg-1:
// var a=100;
// {
//     var a=10;
// // accessing varaible a inside block
//     console.log(a);//10
// }
// console.log(a);//100




// =>In case of let it is not the same
// ->varaibel a inside is block scoped.
// ->varaible a outside block has different scope.
// ->var variable is attached to global scope.
// ->a inside is block scoped.
// ->a outside in different scope other than global and block.
// ->varaile b inside the block is shadowing variable a outside the block.



// eg-1:
// let a=100;
// {
//     let a=20;
//     var b=12;
//     const c=100;
// // accessing varaible a inside block
//     console.log(a);//10
//     console.log(b);//12
//     console.log(c);//100
// }
// console.log(a);//100


// =>Scope
// =>Block
// a: 20
// c: 100
// =>Script
// a: 100

// =>Global
// b: 12


// ->shadowing is not concept of block but it is behave same in functions.

// eg-3:

// var c=100;
// function x(){
//     var c=30;
//     console.log(window.c);//100
//     window.c=20;
// }
// x();
// console.log(c);//20

// output:
// 100
// 20

//=>4. Illegal Shadowing in JS
// ->we can shodow to same varibables with same keyword.
// eg-1:shadowing is allowed in this case
// let a=20;
// {
//     let a=20
// }

// eg-2:illegal shadowing- shadowing is not allowed in this case
// let a=10;
// {
//     var a=10;
// }

// Output:Uncaught SyntaxError: Identifier 'a' has already been declared

// eg-3: shadowing is allowed in this case.
// var a=20;
// {
//     let a=20;
// }

// ->while shadowing let varaibles should not cross the boundary of the scope.
// ->let cannot be re-declared.

// ->var is function scoped.
// eg-4: 
// let a=10;
// function x(){
//     var a=20;
// }

// eg-5:
// const a=20;
// {
//     const a=20;
// }

// 5. Lexical Block Scope with Code Examples
// ->block scope follows lexical scope.
// ->lexical scope works in block also.
// eg-1:
// const a=20;
// {
//     const a=20;
//        {
//         const a=200;
//         console.log(a);//200
//        }
//    console.log(a); //20
// }
// console.log(a); //20


// 6. Arrow Functions Scope and the 
// ->all the scope rule which work on functions are exactly same in the arrow functions.
 



