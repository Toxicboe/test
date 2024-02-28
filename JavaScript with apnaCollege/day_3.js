//LOOPS IN JS
//-----------------------------------


//For loop----------------------

// for(let count = 1; count <= 5; count++){
//     console.log("Saipal Shahi");
// }
// console.log("loop has ended");

// calculate sum of 1 to 10
// let num = 0;
// for(i=0;i<=5;i++){
//     num = num + i;
// }
// console.log("num =", num);

// for (let i =1; i <= 10; i++){
//     console.log("i = ",i);
// }

//While loop ---------------------

// let i = 1;
// while (i <= 5){
//     console.log(i);
//    i++;
// }


//do-while loop---------------

// let i = 0;
// do {
//     console.log("i =", i);
//     i++;
// }while(i <= 20);



//for-of loop--------------------- 
// let str = "saipal shahi";
// let size = 0;
// for(let i of str){
//     console.log("i=", i);
//     size++;

// }


//for-in loop----------------------
// let student = {
//     name : " saipal",
//     age : 19,
//     gpa : 3.1,
//     isPass : true,

// }
// for (let key in student){
//     console.log("key =", key ,"value =", student[key]);
// }

//let's pratice--------------
//Qn1 . Print all even numbers from 0 to 100,

//EVEN
// for (let number = 0; number <= 100; number ++)
// if( number % 2 === 0){
//     console.log("even =",number);
// }

//ODD
// for(let number = 0; number <= 100; number ++)
// if(number % 2 !== 0){
//     console.log("even number =", number);
// }


//QN2. Create a login game where you can start with any random game number. Ask the user to keep guessing the game number until the user enters correct value. 
// let correctPass = 1234;
// let userPass = prompt("Enter a password :");

// while (userPass != correctPass) {
//     userPass = prompt("Please ! try again : ")
// }
// console.log("Password, Successfully ");




//String in JS
//------------------------------------------
//String is a sequence of character used to represent text
 
// create string-------------------
// let str = "Saipal shahi";
// console.log(str[3]);   //p


//Template literals ------------------------
//Example ---
// let obj = { 
//     item : "pen",
//     price : 20,
// };

// let output = `The price of ${obj.item} is ${obj.price}.`;
// console.log(output);

// // console.log("The price of ", obj.item , "is", obj.price);


// let specialString = `This is the template literals`;
// console.log(typeof specialString);

//  let specialString = `This is the template literals ${1+2+3+4}`;
//  console.log(specialString); 

// console.log("saipal\nshahi");
// let str = "Saipal\nShahi";
// console.log(str.length);


//String Methods in JS----------------
//These are built-in function to manipulate a string

// let str = "Saipal Shahi";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


// let abc = "Saipal Shahi";
// let newAbc = abc.toLowerCase();
// console.log(abc);
// console.log(newAbc);

// let str = "   SaipAL Shahi   a";
// let newStr = str.trim();  
// console.log(str);
// console.log(newStr);


// let str = "123456";
// console.log(str.slice(0,5));  //str.slice(start,end)

// let str1 = "saipal";
// let str2 = "shahi";
// let result = str1.concat(str2);
// console.log(result);

// let str = "hello";
// console.log(str.replace("h", "y"));

// let str = "Saipal Shahi";
// console.log(str.charAt(1));

// let fullName = prompt("Enter your fullName without space: ");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);
