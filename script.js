// ///////   chapter 21-25   /////////

/// 1.Take first and last name, combine as fullName, greet user.

///////////////     Answer       /////////////////////

var fName = prompt("Enter your First Name");
var lName = prompt("Enter your Last Name");
var fullName = fName +" "+ lName;
alert("Hello " + fullName);


/// 2. Take favorite mobile model input and display its length.

///////////////     Answer       /////////////////////

var mobile = prompt("Enter your Favourite Mobile name");
var length = mobile.length;

  document.writeln(`My Favourite Mobile is ${mobile} <br><br> Length of String is ${length} `); 


/// 3. Find and display index of letter “n” in “Pakistani”. 
///////////////     Answer       //////////////////////

// var str= "Pakistani";
// var indexOfN = str.indexOf("n");
// document.writeln(`String : <b> ${str}  </b><br><br> Index of n : <b> ${indexOfN}  </b> `); 

/// 4. Find and display last index of “l” in “Hello World”.

///////////////     Answer       /////////////////////

// var str= "Hello World";
// var indexOfL = str.lastIndexOf("l");
// document.writeln(`String : <b> ${str}  </b><br><br>Last Index of l : <b> ${indexOfL}  </b> `); 


/// 5.Find and display character at 3rd index in “Pakistani”.

///////////////     Answer       /////////////////////

// var str= "Pakistani";
// var index3 = str[3];
// document.writeln(`String : <b> ${str}  </b><br><br> Characterat index 3 is  : <b> ${index3}  </b> `);



/// 6.Repeat Q1 using string concat() method.

///////////////     Answer       /////////////////////

// var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// var fullName = fName .concat(" ", lName);
// alert("Hello " + fullName);




/// 7. replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result

///////////////     Answer       /////////////////////

// var city = "hyderabad";
// var replace = city.replace("hyder","Islam");
// document.writeln(`City : <b> ${city}  </b><br><br> After Replacement  : <b> ${replace}  </b> `);





/// 8. Replace all "and" occurrences in a string with "&" and display it.

///////////////     Answer       /////////////////////

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// for (let i = 0; i < message.length; i++) {
//    if (message.slice(i,i+3) === "and") {
//     message= message.slice(0,i) + "&" + message.slice(i+3) 
//    }
    
// } 

// document.writeln(message);


/// 9. converts a string “472” to a number 472. Display the values & types 

///////////////     Answer       /////////////////////

// var str = "472";
// var num = parseInt(str);


//    document.writeln(` Value : ${str} <br><br>`); 
//    document.writeln(` Type :${typeof str } <br><br>`);
//    document.writeln(` Value :${num} <br><br>`); 
    
//    document.writeln(` Type :${typeof num }<br><br>`); 


/// 10. Convert user input in capital letters.

///////////////     Answer       /////////////////////


// var user = prompt("Enter any word");

//  document.writeln(` User input :${user } <br><br>`);
//    document.writeln(` Upper case :${user.toUpperCase()} <br><br>`); 


/// 11 .Convert user input in Title case.

///////////////     Answer       /////////////////////

// var user = prompt("Enter any word");

//  document.writeln(` User input :${user } <br><br>`);
// document.writeln(` Title case :${user.slice(0,1).toUpperCase() }${user.slice(1).toLowerCase() } <br><br>`); 



/// 12 .variable num to string. Remove the dot to 

///////////////     Answer       /////////////////////

// var num = 35.36
// var str =  num.toString().replace(".","") ;
//  document.writeln(` Number :${num } <br><br>`);
//  document.writeln(` String :${str }`);




/// 13 .

///////////////     Answer       /////////////////////

// var username = prompt("Enter your username:");
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (isValid) {
//     alert("Valid username: " + username);
// } else {
//     alert("Please enter a valid username (no @ . , ! allowed)");
// }



/// 14 .Search user input in array and show if the item is found or not.

///////////////     Answer       /////////////////////

//  var items =  ["cake", "apple pie","cookie","chips", "patties"]; 
// var user = prompt("Welcome too ABC bakery . what do you want to order sir/ma'am?").toLowerCase();
// var isItemFound = false;

// for (var i = 0; i < items.length; i++) {
//     if (user === items[i]) {
//         isItemFound = true;
//     document.writeln(`${user} is <b>avaible</b> at Index ${i} in our bakery  <br><br>`);
// break;
//     }
 
//     }

// if (isItemFound === false) {
//     document.writeln(` We are sorry ${user} is <b>not avaible</b> in our bakery  <br><br>`); 
// }



/// 15 .

///////////////     Answer       /////////////////////


// var password = prompt("Enter your password:");

// var hasAlphabet = false;
// var hasNumber = false;
// var isValid = true;

// // condition c: minimum length
// if (password.length < 6) {
//     isValid = false;
// }

// // condition b: should not start with number
// var firstCode = password.charCodeAt(0);
// if (firstCode >= 48 && firstCode <= 57) {
//     isValid = false;
// }

// // check alphabets and numbers
// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);

//     // A-Z or a-z
//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasAlphabet = true;
//     }

//     // 0-9
//     if (code >= 48 && code <= 57) {
//         hasNumber = true;
//     }
// }

// if (!hasAlphabet || !hasNumber) {
//     isValid = false;
// }

// if (isValid) {
//     alert("Valid Password");
// } else {
//     alert("Please enter a valid password");
// }


/// 16 . string to an array using string split method

///////////////     Answer       /////////////////////

// var university = "University of Karachi"; 
// var split = university.split('');

// for (let i = 0; i < split.length; i++) {
//    document.writeln(split[i] +" <br>")
    
// }


/// 17 . last character of a user input.

///////////////     Answer       /////////////////////

// var input = prompt("Enter a word");

// var lastChar = input.slice(-1);
// document.writeln(lastChar)

//  document.writeln(` User Input :${input } <br><br>`);
//  document.writeln(` Last Character :${lastChar }`);


/// 18 .count number of occurrences of word “the” in given string

///////////////     Answer       /////////////////////

// var str = "the quick brown fox jumps over the lazy dog";
// var occurance =[]
// for (let i = 0; i <str.length ; i++) {
//  if (str.slice(i,i+3) == "the") {
//    occurance++;
   
//  }
   
// } 

//  document.writeln(` TEXT :${str} <br><br>`);
//  document.writeln(` There are  ${occurance } occursnce(s) of word "the`);



// ///////   chapter 26-30   /////////



/// 1.Enter a positive number and display its round, floor, and ceil values.

///////////////     Answer       /////////////////////

// var num = parseFloat(prompt("Enter a positive integer"));


//  document.writeln(`Number : <b> ${num}  </b><br><br> 
//    round off value  : <b> ${Math.round(num)}  </b> 
//       <br><br> 
//       floor value : <b> ${Math.floor(num)}  </b> 
//       <br><br> 
//       ceil value: <b> ${Math.ceil(num)}  </b>
//       <br><br> `);
      



/// 2. Enter a negative floating number and display its round, floor, and ceil values

///////////////     Answer       /////////////////////

// var num = parseFloat(prompt("Enter a negative floating number"));


//  document.writeln(`Number : <b> ${num}  </b><br><br> 
//    round off value  : <b> ${Math.round(num)}  </b> 
//       <br><br> 
//       floor value : <b> ${Math.floor(num)}  </b> 
//       <br><br> 
//       ceil value: <b> ${Math.ceil(num)}  </b>
//       <br><br> `);


/// 3. Write a program to display the absolute value of a number.

///////////////     Answer       /////////////////////

// var num = parseInt(prompt("Enter a number"));


//  document.writeln(`Absolute value of  ${num}  is  ${Math.abs(num)}`);

/// 4. Write a program to simulate a dice using random() and display result.

///////////////     Answer       /////////////////////
// var dice = Math.floor(Math.random()*6)+1;
//  document.writeln(`Random Dice value :  ${dice} `);



/// 5.Write a program to simulate a coin toss using random() and display result.

///////////////     Answer       /////////////////////

// var coin = Math.ceil(Math.random()*2);
// if (coin === 1) {
//      document.writeln(`${coin}<br>Random Coin value :  Tails `);
// } else {
//     document.writeln(`${coin}<br>Random Coin value :  Heads`);
// }



/// 6.Write a program to display a random number between 1 and 100.

///////////////     Answer       /////////////////////
// var num = Math.floor(Math.random()*100)+1;
//  document.writeln(`Random Number between 1 and 100 :  ${num} `);





/// 7. Ask user weight, parse input, and display weight in browser.

///////////////     Answer       /////////////////////

// var weight = parseFloat(prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs):"));


//  document.writeln(`your weight is  ${weight}  Kilograms.`);





/// 8. Generate secret number 1–10 and check if user guesses correctly.

///////////////     Answer       /////////////////////

// var number = Math.floor(Math.random()*10)+1;
// var userGuess = +prompt("Guess number between 1 and 10");

// if (userGuess === number) {
//    document.writeln("Congratulations! You guessed the correct number.");

// }else if (userGuess === number - 1 || userGuess === number + 1 ) {
//       document.writeln("Close enough to the correct answer! The secret number was " + number);
// }
//  else {
//     document.writeln("Try again! The secret number was " + number);
// }


// ///////   chapter 31-34   /////////


/// 1.Display current date and time

///////////////     Answer       /////////////////////

// document.writeln(new Date());
      



/// 2.Display current month name in alert

///////////////     Answer       /////////////////////

// var now = new Date();

// var months = ["January","February","March","April","May","June",
//               "July","August","September","October","November","December"];

// var currentMonth = months[now.getMonth()];

// alert("Current month: " + currentMonth);

/// 3. Display first three letters of current day in alert

///////////////     Answer       /////////////////////

// var now = new Date();

// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// var today = days[now.getDay()];

// alert(today);



/// 4. Display “It’s Fun day” if today is Saturday or Sunday.

///////////////     Answer       /////////////////////

// var now = new Date();
// var day = now.getDay();
// document.writeln(day  +"<br>");

// if (day == 0 || day == 6) {
//     document.writeln("It's Fun day")
// }


/// 5.Check date and display first or last days of month.

///////////////     Answer       /////////////////////

// var now = new Date();

// var date = now.getDate();
// document.writeln(date +"<br>");
// if (date<= 15 ) {
//     document.writeln("First fifteen days of the month");
// } else {
//         document.writeln("Last days of the month");

// }



/// 6.Find minutes since Jan 1, 1970 using JavaScript Date object.

///////////////     Answer       /////////////////////

// var today = new Date();
// var mili = today.getTime();

// var min = mili / (1000 * 60);
//  document.writeln(`Current date : <b> ${today}  </b><br><br> 
//  Elapsed miliseconds sice January 1, 1970 : <b> ${mili}  </b> 
//       <br><br> 
//      Elapsed minutes sice January 1, 1970 : <b> ${min} `);



/// 7.Check time and display AM or PM using JavaScript

///////////////     Answer       /////////////////////

// var now = new Date();
// var hour = now.getHours();

// if (hour < 12) {
//     document.writeln("IT'S AM")
// } else {
//       document.writeln("IT'S PM")
// }




/// 8. Create Date object for December 31, 2020 and assign to variable.

///////////////     Answer       /////////////////////

// var laterDate = new Date(2020, 11, 31); 
// document.writeln(laterDate)


/// 9. Calculate days passed since 1st Ramadan, June 18, 2015.

///////////////     Answer       /////////////////////

// var now =new Date();
// var ramdanDate = new Date(2015, 5, 18); 
// var miliPassed = now - ramdanDate;
// var dayPassed = Math.floor(miliPassed /(1000 * 60 * 60 * 24));
// document.writeln( dayPassed + " Days have passed since 1st Ramadan, 2015 ");



/// 10. Calculate seconds elapsed from reference date to January 1, 2015.

///////////////     Answer       /////////////////////

// var referenceDate = new Date();
// var start2015 = new Date(2015, 0, 1);

// var milli = referenceDate - start2015;
// var seconds = Math.floor(milli / 1000);

//   document.writeln(`On reference date  <b> ${referenceDate}  </b><br><br> 
//   <b> ${seconds}  </b>   Seconds has passed since begning of 2015
//       `);

/// 11. Add one hour to current date and display updated Date object.

///////////////     Answer       /////////////////////

// var currentDate = new Date();

// var hours = currentDate.getHours();
// document.writeln(`Current date  <b> ${currentDate}  </b><br><br> `);
// currentDate.setHours(hours + 1);


// document.writeln(`1 hour ahead, it will <b> ${currentDate}  </b>  `);

/// 12. Create a date object and display date set 100 years back.

///////////////     Answer       /////////////////////

// var currentDate = new Date();

// var oldyear = currentDate.getFullYear();
// document.writeln(`Current date  <b> ${currentDate}  </b><br><br> `);
// currentDate.setFullYear(oldyear-100);


// document.writeln(`100 years back, is was <b> ${currentDate}  </b>  `);



/// 13. Ask user’s age and display calculated birth year in browser.

///////////////     Answer       /////////////////////

// var age = parseInt(prompt("Enter Your age"));
// var now = new Date();
// var currentYear = now.getFullYear();

// var birthYear = currentYear -age;
//  document.writeln(`Your Age is   <b> ${age}  </b><br><br> 
//     your Birth year is  ${birthYear}`);
 


/// 14. Write a browser program generating K-Electric bill with units,name,Net Amount Payable, charges,late chages,  Gross Amount Payable .

///////////////     Answer       /////////////////////

// var name = prompt("Enter Your Name");
// var month = prompt("Enter Month");
// var units = prompt("Enter the number of units you used this month. ");
// var chargesPerUnit  = prompt("Charges per unit");
// var netAmount =units * chargesPerUnit;
// var latePayment = 350;
// var grossAmount =netAmount + latePayment;


// document.writeln(`Customer name :  <b> ${name}  </b><br><br> 
//     Month :  <b> ${month}  </b><br><br> 
//     Number of Units :  <b> ${units}  </b><br><br> 
//     Charges per unite :  <b> ${chargesPerUnit}  </b><br><br><br>
//     Net Amount Payable (within Due Date)  :  <b> ${netAmount}  </b><br><br> 
//      Late Payment Surcharge :  <b> ${latePayment}  </b><br><br> 
//    Gross Amount Payable (after Due Date) :  <b> ${grossAmount}  </b><br><br> `);
    
    
//  //////////// chapter 35 - 42    //////////





/// 1.function that Display current date and time

///////////////     Answer       /////////////////////

// function dateAndTime() {
//    document.writeln(new Date()); 
// }
// dateAndTime();
      



/// 2.function that Take first and last name, combine as fullName, greet user.

///////////////     Answer       /////////////////////

// function greet() {
//   var fName = prompt("Enter your First Name");
// var lName = prompt("Enter your Last Name");
// var fullName = fName +" "+ lName;
// alert("Hello " + fullName);  
// }
// greet();

/// 3.function that adds two numbers (input by user)

///////////////     Answer       /////////////////////

// function sum() {
//     var num1 = +prompt("Enter a number ");
// var num2 = +prompt("Enter another number ");
// var sum = num1 + num2;
// document.writeln("Sum of "+num1 +" and" + num2 + " is " +sum)
// }
// sum();



/// 4.Create a function using num1, num2, operator to display result.

///////////////     Answer       /////////////////////

// function calculate(num1, num2, operator) {
//   var result;

//   if (operator === "+") result = num1 + num2;
//   else if (operator === "-") result = num1 - num2;
//   else if (operator === "*") result = num1 * num2;
//   else if (operator === "/") result = num1 / num2;

//   return result;
  
// }

// document.writeln(calculate(10, 5, "+"));


/// 5.function that squares its argument

///////////////     Answer       /////////////////////

// function square(a) {
   
//     document.writeln(a*a);
// }

// square(8);

/// 6.function that computes factorial of a number.

///////////////     Answer       /////////////////////

// function factorial(n) {
//     var f = 1;
//     for (var i = 1; i <= n; i++) {
//     f = f * i;
   
        
//     }
//      document.writeln(f);
// }
// factorial(5);

/// 7.function to display counting between start and end numbers.

///////////////     Answer       /////////////////////

// function counting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.writeln(i + "<br>");
//     }
// }

// counting(1, 10);




/// 8. function that computes hypotenuse of a right angle triangle.  

///////////////     Answer       /////////////////////

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }

//     var hypotenuse = Math.sqrt(
//         calculateSquare(base) + calculateSquare(perpendicular)
//     );

//     document.writeln(hypotenuse);
// }

// calculateHypotenuse(3, 4);


/// 9. Create a function to calculate rectangle area using width and height.

///////////////     Answer       /////////////////////

// function area(width,height) {
//     return width*height
// }
//    1 Arguments as value
// document.writeln(area(20,10)+ "<br>");

// 2. Arguments as variables 
//  var w = 10
//  var h= 5
//  document.writeln(area(w,h));





/// 10. Create a function to check whether a given string is palindrome.

///////////////     Answer       /////////////////////

// function isPalindrome(str) {
//     var reversed = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     if (str === reversed) {
//         document.writeln(str + " is a Palindrome");
//     } else {
//         document.writeln(str + " is Not a Palindrome");
//     }
// }

// isPalindrome("level");

/// 11.Create a function to capitalize the first letter of each word.

///////////////     Answer       /////////////////////

// function titleCase(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     var result = words.join(" ");
//     document.writeln(result);
// }


// titleCase("hello world from javascript");


/// 12. Create a function to find the longest word in a string.

///////////////     Answer       /////////////////////

// function LongestWord(str) {
//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     document.writeln("Longest word: " + longest);
// }


// LongestWord("JavaScript is a versatile programming language");




/// 13. Create a function to count occurrences of a letter in string.

///////////////     Answer       /////////////////////

// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     document.writeln("Letter '" + letter + "' occurs " + count + " times.");
// }


// countLetter('JSResourceS.com', 'o');

 


/// 14. Create two functions to calculate a circle’s circumference and area.

///////////////     Answer       /////////////////////

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.writeln("The circumference is " + circumference + "<br>");
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.writeln("The area is " + area);
// }


// calcCircumference(5);
// calcArea(5);


/// 1. calculate the value of a raised to b

///////////////     Answer       /////////////////////

// function power(a,b) {
//     if (b === 0) {
//         return 1;
//     }
//     var result = 1;
//     var absolute = Math.abs(b)
//     for (let i = 0; i < absolute; i++) {
//       result*= a;
        
//     }
//     if (b < 0) {
//         return 1;
//     } 
//     else {
//        return result 
//     }
// }
//     console.log(`2^3 = ${power(2, 3)}`);   // Output: 2^3 = 8
// console.log(`5^0 = ${power(5, 0)}`);   // Output: 5^0 = 1
// console.log(`4^2 = ${power(4, 2)}`);   // Output: 4^2 = 16
// console.log(`2^-2 = ${power(2, -2)}`); // Output: 2^-2 = 0.25  



/// 2.check leap year

///////////////     Answer       /////////////////////

// var year = +prompt("Enter year")
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return "Yes, Its a leap year";
//   }
//   if (year % 100 === 0) {
//     return "No, its not a leap year";
//   }
//   if (year % 4 === 0) {
//     return "Yes, Its a leap year";
//   }
//   return "No,its not a leap year";
// }
// console.log(`${year} is a leap year? ${isLeapYear(year)}`); 


/// 3.  area of triangle

///////////////     Answer       /////////////////////

// function calculateS(a,b,c) {
   
//     return ( a + b + c ) / 2;
// }
// function areaOfTriangle(a,b,c) {
// var s = calculateS(a,b,c)
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// console.log(areaOfTriangle(3,4,5));


/// 4. Create a main function that calls two separate functions to calculate and display the average and percentage of marks from three subjects.

///////////////     Answer       /////////////////////

// function calculateAvg(s1,s2,s3) {
//     return (s1+s2+s3)/3;
// }
// function calculatePer(s1,s2,s3) {
//     var total= s1+s2+s3;
//    return (total / 300) * 100;
// }

// function mainFunction(s1, s2, s3) {
//     var avg = calculateAvg(s1, s2, s3);
//     var per = calculatePer(s1, s2, s3);
   
//     console.log("Average Marks: " + avg);
//     console.log("Percentage: " + per + "%");
// }

// mainFunction(70, 65, 80);

/// 5.ustom indexOf function

///////////////     Answer       /////////////////////

// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//        if (str[i] === char) {
//         return i;
//        }
        
//     }
//     return -1;
// }
// var word = "Modern Web and app development"
// console.log(myIndexOf(word,"d"));
// console.log(myIndexOf(word,"z"));
// console.log(myIndexOf(word,"a"));



/// 6.Write a function to remove all vowels from a sentence (max 25 characters).

///////////////     Answer       /////////////////////
// function removeVowel() {
//     var str = "Hello world".toLowerCase();
//     var newStr ="" ;
//     for (var i = 0; i < str.length; i++) {
//         if (!(str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u" )
//         ) {
//              newStr+=str[i]
//         }
       
        
//     }
//     console.log(str);
//     console.log(newStr);
    
    
// }
// removeVowel();



/// 7.Write a function using a switch statement to count how many times two vowels appear together in a sentence

///////////////     Answer       /////////////////////

// function count2vowel() {
    
//     var str = "Pleases read this application and give me gratuity".toLowerCase();
//     var count = 0;

//     for (var i = 0; i < str.length - 1; i++) {
//         var vowel1 = str[i];
//         var vowel2 = str[i + 1];

//         switch (vowel1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
               
//                 if (vowel2 === 'a' || vowel2 === 'e' || vowel2 === 'i' || vowel2 === 'o' || vowel2 === 'u') {
//                     count++;
//                     console.log("Occurrence found: " + vowel1 + vowel2);
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count;
// }

// console.log("Total Count: " + count2vowel());




/// 8.Write four functions to convert distance from Kilometers (km) into Meters, Feet, Inches, and Centimeters.

///////////////     Answer       /////////////////////

// 1. KM to Meters
// function convertToMeters(km) {
//     var meters = km * 1000;
//     console.log(km + " km = " + meters + " Meters");
// }

// // 2. KM to Feet
// function convertToFeet(km) {
//     var feet = km * 3280.84;
//     console.log(km + " km = " + feet + " Feet");
// }

// // 3. KM to Inches
// function convertToInches(km) {
//     var inches = km * 39370.1;
//     console.log(km + " km = " + inches + " Inches");
// }

// // 4. KM to Centimeters
// function convertToCentimeters(km) {
//     var cm = km * 100000;
//     console.log(km + " km = " + cm + " Centimeters");
// }




// convertToMeters(5);
// convertToFeet(5);
// convertToInches(5);
// convertToCentimeters(5);


/// 9. Calculate an employee's overtime pay at a rate of Rs. 12 per hour for every full hour worked beyond the 40-hour limit.

///////////////     Answer       /////////////////////

// function calculateOver(hour) {
//     var overPay = 0;
//     if (hour> 40) {
//         var extraHour = hour - 40;
//         overPay =extraHour * 12;
//     } return overPay;
// }
// console.log("Overtime Pay: Rs. " + calculateOver(50));




/// 10. Calculate the number of 100, 50, and 10 rupee notes needed to provide a specific withdrawal amount.

///////////////     Answer       /////////////////////


// var amount = prompt("Enter amount to Withdraw"); 


// var notes100 = Math.floor(amount / 100);
// var After100 = amount % 100;


// var notes50 = Math.floor(After100 / 50);
// var After50 = After100 % 50;


// var notes10 = Math.floor(After50 / 10);


// console.log("You will have "+ notes100 +" hundred  notes " + notes50+ " fifty notes "+notes10+" ten notes");