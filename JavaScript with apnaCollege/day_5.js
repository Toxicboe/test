// FUNCTION IN JS
//--------------------------------------------------

// Function Definition

//  function functionName (){
//do some work
//  }

// function myFunction() {
//     console.log("Its me Saipal Shahi");
// }
// myFunction();

// function myFunction(msg){
//     console.log(msg);
// }
// console.log("I love JS");

// function functionName(param1, param2....){
//do some work
// }

//function -> 2 numbers, multiple------------------

// function multiple(x,y){
//     m = x * y ;
//     return m;
// }
// let val = multiple(10,5);
// console.log(val);

// Arrow Function -------------------------

// const arrowMul = (x,y) => {           //arrow function
//     return x * y;
// }

// function arrowMul (x,y) {              //function
//     return x * y;
// }

// const helloPrint = () => {
//     return helloWorld;

// }
// console.log("Hello world")

// LET'S PRATICE -------------------------------------------

// Qs. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

// function countVowels (str) {
// let count = 0;
// for (const char of str){
//   if(char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o"||
//   char === "u"){
//     count ++;
//   }
// }
// console.log(count);
// }


//Using arrow function --------------

// const countVowels = (str) =>{
//   let count = 0;
//   for(const char of str){
//     if(char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u" ){
//       count ++ ;
//     }
//   }
//   console.log(count);
// }


//  foreach loop in arrays

// let array = [ "ktm","humla","nepalgunj","laii"];

// array.forEach(function myFunction(val){
//   console.log(val);
// })

// array.forEach((val,index,array) => {
//   console.log(val.toUpperCase(),index,array);
// })

//Let's Pratice  -----------------------------

// Qn. For a given array of numbers, print the square of each using the forEach loop.
// let number = [1,2,3,4,5,6,7,8,9];

// number.forEach((num) => {
//   console.log(num*num);
// });


// let nums = (num) => {
//   console.log(num * num)
// };
// number.forEach(nums);


 
// MAP--------------------------------------

// let num = [1,2,3,4,5,6];

// let newArray = num.map((val) => {
//   return val * 2;
// })
// console.log(newArray)


// filter --------------------------------

// let num = [1,2,3,4,5,6];

// let evenArr = num.filter((val) => {
//   return val % 2 === 0 ;
// })
// console.log(evenArr);


// Reduce -----------------------------

// let num = [1,2,3,4,5,6,10];

// const result = num.reduce((result,current)=> {
//   return result + current;
// })
// console.log(result);


// const result = num.reduce((result,current)=> {
//   return result > current ? result : current
// })
// console.log(result);



// Let's Pratice --------------------------

// let marks = [89,90,100,98,38,89];
// let results = marks.filter((val) => {
//   return val >= 90;
// })
// console.log(results);

//----------------------------


// let n = prompt("Enter a number  : ");

// let array = [];
// for(let i = 1; i <= n; i++){
//   array[i - 1] = i;
// }
// console.log(array);

// let sum = array.reduce((previous, current) => {
//   return previous + current;
// });
// console.log(sum);

// let factorial = array.reduce((previous, current) => {
//   return previous * current;
// });
// console.log(factorial);
