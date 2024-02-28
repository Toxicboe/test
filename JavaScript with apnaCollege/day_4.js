//ARRAYS IN JS
//-----------------------------------
//Collection of items.

// let heroes = ["superman", "Ironman","Hulk","Thor","Groot"];
// console.log(heroes);
// console.log(heroes.length);

// let marks = [89,66,78,98,66,69];
// console.log(marks);
// console.log(marks.length);

// let info = ["Saipal Shahi", 19, "Humla"];
// console.log(info);


//Array Indices----------------------

// let marks = [67,78,89,90,97,87];
// console.log(marks);
// console.log(marks[2]);
// console.log(marks[2]=66);



//Using for loop
// let heroes = ["superman", "Ironman","Hulk","Thor","Groot"];
// for(i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }


//Using for of
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }



//QN. For a given array with marks of students ->[85,97,44,37,76,60].Find the average marks of the entire class.

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks ){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`The avg marks of student is ${avg}.`);


// Qs. For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applaying offer.  


// let items = [250, 645, 300, 900, 50];

//Using for of loop-----
// let index = 0 ;
// for (let val of items){
//     let offer = val / 10;
//     items[index] -= offer;
//     console.log(`the price using offer ${items[index]}`)
//     index++;

// }


// Using for loop--------

//  for (index = 0 ; index < items.length; index++){
//     let offer = items[index] / 10;
//     items[index] -= offer;
//  }
//  console.log(items);



// Array methods 
//---------------------------------


//Push ------------------
// let foodItems = ["apple","banana","carrot","pumpkin"];
// console.log(foodItems);
// foodItems.push("litchi","orange");
// console.log(foodItems);


//POP--------------------
// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);


//toString -----------------

// let marks = [100,92,94,95,65];
// console.log(marks);
// console.log(marks.toString());


//conCat---------------------

// let marvelHeroes = ["thor","ironman","spiderman","Dr. Stranger"];
// let dcHeroes = ["superman","batman"]
// let nepaliHeroes = ["rajesh","nikhil"];

// let heroes = marvelHeroes.concat(dcHeroes,nepaliHeroes);
// console.log(heroes);



// unShift ()--------------------

// let val = marvelHeroes.unshift("abc");
// console.log(val);


//Shift() ----------------

// let val = marvelHeroes.shift();
// console.log(val);
// console.log(marvelHeroes);


//Slice -------------------

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,5));


//Splice()---------------------


//add element ---------
// let array = [1,2,3,4,5,6,7,8,9];
// console.log(array.splice(2,1,9));  
// console.log(array);

//delete element --------
// let array = [1,2,3,4,5,6,7,8,9];
// console.log(array.splice(3,2));
// console.log(array);

// replace element 
// let array = [1,2,3,4,5,6,7,8,9];
// console.log(array.splice(2,2,10));
// console.log(array);



//  Let's Pratice 
//------------------------------------

//Qs. Create an array to stire companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from the array
// b. Remove Uber ^ Add Ola in its place
// c. Add Amazone at the end

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// a. console.log(companies.shift());

// b. console.log(companies.splice(2,1,"Ola"));
//    console.log(companies);

// c. console.log(companies.push("Amazone"))





















