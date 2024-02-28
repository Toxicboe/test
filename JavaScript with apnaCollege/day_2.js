//OPERATORS IN J
//----------------------

// Arithmetic oprators------------

// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =",b);
// console.log("a + b =",a + b);
// console.log("a - b =",a - b);
// console.log("a * b =",a * b);
// console.log("a / b =",a / b);
// console.log("a % b =",a % b);         //modulus
// console.log("a ** b =", a ** b);      //Exponentiation



// // Unary operator-------------

// let x = 5;
// let y = 2;

// console.log("x =", x, "& y=",y);
// x++;                             //Increment
// console.log("x++ =",x);


// let p = 5;
// let q = 2;

// console.log("p =" ,p, " & q = ", q);
// p--;                         //Decrement
// console.log("p-- =", p--);



// let a = 5;
// let b = 2;

// console.log("a = " , a ," & b ", b);
// console.log("a++ = ", a++);               //post Increment
// console.log("a++ = ", a);


// console.log("a =" , a, "& b =", b);
// console.log("++a = ", ++a);           //pre increment



// Assignment Operators------------

// let a = 5;
// let b = 2;

// console.log("a =", a, "& b = ",b);
// a += 4;    //a = a + 4
// console.log("a =" , a);   //9


// let a = 5;
// let b = 2;

// console.log("a =", a, "& b = ",b);
// a -= 4;  // a = a - 4
// console.log("a =" , a);    //1


// let a = 5;
// let b = 2;
// console.log("a =", a, "& b = ",b);
// a *= 4;  //a = a * 4
// console.log("a =",a );   //20

// let a = 5;
// let b = 2;
// console.log("a =", a, "& b = ",b);
// a /= 4;  //a = a / 4
// console.log("a =",a );  //1.25

// let a = 5;
// let b = 2;
// console.log("a =", a, "& b = ",b);
// a %= 4;  //a = a % 4
// console.log("a =",a );  //1

// let a = 5;
// let b = 2;
// console.log("a =", a, "& b = ",b);
// a **= 4;  //a = a ** 4
// console.log("a =",a );  //625



//Comparision Operator----------------

// let a =5;
// let b= "5";

// console.log("5 == 2", a == b);   //true
// console.log("5 === 2", a === b);   //false
// console.log("5 != 2", a != b);   //false
// console.log("5 !== 2", a !== b);   //True

// let a =5;
// let b= 5;

// console.log("5 == 2", a == b);   //true
// console.log("5 === 2", a === b);   //true
// console.log("5 != 2", a != b);   //false
// console.log("5 !== 2", a !== b);   //false


// let a =5;
// let b= 2;

// console.log("5 == 2", a == b);   //false
// console.log("5 === 2", a === b);   //false
// console.log("5 != 2", a != b);   //true
// console.log("5 !== 2", a !== b);   //True



//Logical Operator--------------------

//logical AND (&&)---

// let a =6;
// let b =5;

// let cond1 = a > b; //true
// let cond2 = b ===5; //true

// console.log("cond1 && cond2 =" , cond1 && cond2 );


//logical OR (!!)----

// let a =6;
// let b =5;

// let cond1 = a > b; true
// let cond2 = a < b; false
//  console.log("cond1 || cond2 = ", cond1 || cond2);


// logical NOT (!)-----

// let a =6;
// let b =5;

// console.log("!(6 > 5) = ", !(a > b));



//CONDITIONAL STATEMENT
//---------------------------------------

//IF Statement ------------------


// let age = 19;
// let vote;

// if(age <= 18){
//     vote = "You cannot vote.";
// }
// if(age > 18){
//     vote = "you can vote.";
// }
// console.log(vote);


// let mode = "dark";
// let color;

// if(mode === "light"){
//     color = "White";
// }
// if(mode === "dark"){
//     color = "Black";
// }
// console.log(color);


//IF-ELSE condition ------------------

// let mode = "light";
// let color;

// if (mode=== "light"){
//     color = "white";
// }else{
//     color = "black";
// }
// console.log(color);


// let age = "18";
// let vote;

// if(age <= "18"){
//     vote = "You can't vote";
// }else{
//     vote = "You can vote";
// }
// console.log(vote);

// let num = 9;

// if(num % 2 === 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }


//ELSE-IF statement---------------

// let mode = "green";
// let color;

// if (mode === "dark"){
//     color = "black";
// }else if(mode === "blue"){
//     color = "blue";
// }else if (mode === "pink"){
//     color = "pink";
// }else{
//     color = "white";
// }
// console.log(color);


//TERNERY OPERATORS---------------------

// let age =17;

// let result = age >= 18 ? "adult": "not adult";
// console.log(result);





//---------------------------------------


//Pratice qn-----------------

// let num = prompt("Enter a number: ");
// if(num % 5 === 0 ){
//     console.log(num , " is multiple of 5");
// }else{
//     console.log(num , " is not multiple of 5");
// }

// let marks = 90;
// if(marks >= 90 && marks <= 100){
//     console.log(marks, " is grade A");
// }else if(marks >= 70 && marks <= 89){
//     console.log(marks, " is grade B");
// }else if(marks >= 60 && marks <= 69){
//     console.log(marks, " is grade C");
// }else if(marks >= 50 && marks <= 59){
//     console.log(marks, " is grade D");
// }else if(marks >= 0 && marks <= 50){
//     console.log(marks, " is grade fail");
// }else{
//     console.log("Please enter correct number");
// }


let score = prompt("Enter a score 0-100");
let grade;

if(score => 90 && score >= 100 ){
    grade = "A";
}
else if(score => 70 && score >= 89 ){
    grade = "B";
}
else if(score => 60 && score >= 69 ){
    grade = "A";
}else if(score => 50 && score >= 59 ){
    grade = "A"
}else if(score => 0 && score >= 50 ){
    grade = "A"
}else{
    "Enter a correct number"
};

console.log("Your grade was :", grade);