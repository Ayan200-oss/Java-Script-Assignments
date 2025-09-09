// ************Chapter 01************

// **Question#1**

// alert("Welcome to our website!");


// **Question#2**

// alert("Error! Please enter a valid password.");


// **Question#3**

// alert("Welcome to JS Land...\nHappy Coding!");


// **Question#4**

// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.");


// **Question#5**

// console.log("Hello... I can run JS through my web browser's console");


// **Question#6**

//done in index.html file


// **Question#7**

//done in index.html file


// ************Chapter 02************

// **Question#1**

// var username = prompt("Enter your username");
// console.log("Username: " + username);


// **Question#2**

// var myName = "John Doe";
// console.log("My name is " + myName);


// **Question#3**

// var message = "Hello World";
// alert(message);


// **Question#4**

// var studentName = "Jhone Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCourse);


// **Question#5**

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);


// **Question#6**

// var email = "example@example.com";
// alert("Email: " + email);


// **Question#7**

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);


// **Question#8**

// document.write("<h1>Yah! I can write HTML content through JavaScript</h1>");


// **Question#9**

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);




// ************Chapter 03************


// **Question#1**

// var age = 15;
// alert ("I am " + age + "years old")


// **Question#2**

// var visit = 14;
// alert("You have visited this site " + visit + " times");


// **Question#3**

// var birthYear = 1990;
// document.write("<h1> My birth year is " + birthYear + "<br> Data type of my declared variable is number</h1>");



// **Question#4**

// var visitorName = "Jhon Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write("<h1>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store</h1>");




// ************Chapter 04************


// **Question#1**

// var var1 = "Hello", var2 = "World", var3 = 2023;
// console.log(var1 + " " + var2 + " " + var3);


// **Question#2**

////legal///
// var Name1 = "Muhamamd Ayan";
// var $ohk = "done";
// var stdName ="Muhamamd Ayan";
// var roll_no = 2540;
// var school = "KPS";

////illegal///
// var 12name = "Muhamamd Ayan"
// var name-std = "Muhamamd Ayan"
// var &name = "Muhamamd Ayan"
// var name@ = "Muhamamd Ayan
// 


// **Question#3**

// document.write("<h1>a.Rules for naming JS variables</h1><br>");
// document.write("b.Variable names can only contain numbers, $, and _. <br> <br>");
// document.write("c.Variables must begin with a letter, $ or _. <br><br> For example $name, _name or name <br> <br>");
// document.write("d.Variable names are case sensitive <br> <br>");
// document.write("e.Variable names should not be JS keywords<br>");




// ************Chapter 05************


// **Question#1**

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = num1 + num2;
// alert("The sum of " + num1 + " and " + num2 + " is " + sum);

// **Question#2**

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var subtract = num1 - num2;
// alert("The subtraction of " + num1 + " and " + num2 + " is " + subtract);


// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var product = num1 * num2;
// alert("The product of " + num1 + " and " + num2 + " is " + product);



// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var division = num1 / num2;
// alert("The division of " + num1 + " and " + num2 + " is " + division);



// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var remainder = num1 % num2;
// alert("The remainder of " + num1 + " and " + num2 + " is " + remainder);



// **Question#3**

// var variable;
// document.write("Value after variable declaration is " + variable + "<br>");
// variable = 5;
// document.write("Initial value: " + variable + "<br>");
// variable++;
// document.write("Value after increment is " + variable + "<br>");
// variable += 7;
// document.write("Value after addition is " + variable + "<br>");
// variable--;
// document.write("Value after decrement is " + variable + "<br>");
// document.write("The remainder is " + (variable % 3) + "<br>");


// **Question#4**

// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");


// **Question#5**

// var number = +prompt("Enter a number to show its multiplication table");
// document.write("<h1>Multiplication Table of " + number + "</h1>");

// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }


// **Question#6**

// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(fahrenheit2 + "°F is " + celsius2 + "°C");



// **Question#7**

// var item1Price = 650;
// var item2Price = 100;
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
// document.write("<h1>Shopping Cart</h1><br>");
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Quantity + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Quantity + "<br>");
// document.write("Shipping Charges: " + shippingCharges + "<br> <br>");
// document.write("Total Cost: " + totalCost + "<br>");



// **Question#8**

// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");



// **Question#9**

// var usDollarToPKR = 104.80;
// var saudiRiyalToPKR = 28;
// var usDollars = 10;
// var saudiRiyals = 25;

// var totalPKR = (usDollars * usDollarToPKR) + (saudiRiyals * saudiRiyalToPKR);
// document.write("<h1>Currency Converter</h1><br>");
// document.write("Total PKR: " + totalPKR + "<br>");



// **Question#10**

// var number = 10;
// var result = ((number + 5) * 10) / 2;
// alert("The result is " + result);



// **Question#11**

// var currentYear = 2025;
// var birthYear = +prompt("Enter your birth year");
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1><br>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age + "<br>");



// **Question#12**

// var radius = "20";
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write("<h1>The Geometrizer</h1><br>");
// document.write("Radius: " + radius + "<br>");
// document.write("Circumference: " + circumference + "<br>");
// document.write("Area: " + area + "<br>");



// **Question#13**

// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalNeeded = (maxAge - currentAge) * amountPerDay;

// document.write("<h1>The Snack Calculator</h1><br>");
// document.write("Favorite Snack: " + favoriteSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snack per Day: " + amountPerDay + "<br>");
// document.write("You will need " + totalNeeded + " chocolate chips to last you until the age of " + maxAge + "<br>");




// ************Chapter 06-09************


// **Question#1**

// var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");
// document.write("<h2>...................................</h2><br><br>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// **Question#2**

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Step 1: --a = 1 (decrement a by 1, so a becomes 1)
// Step 2: --a - --b = 1 - 0 = 1 (decrement b by 1, so b becomes 0)
// Step 3: --a - --b + ++b = 1 + 1 = 2 (increment b by 1, so b becomes 1)
// Step 4: --a - --b + ++b + b-- = 2 + 1 = 3 (use current value of b which is 1, then decrement b by 1, so b becomes 0)
// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");


// **Question#3**

// var username = prompt("Enter your name");
// alert("Welcome " + username + "!");



// **Question#4**

// var number = +prompt("Enter a number to show its multiplication table");
// if (number === 0) {
//     number = 5;
// }

// document.write("<h1>Multiplication Table of " + number + "</h1>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }



// **Question#5**

// var English = +prompt("Enter obtained marks in English");

// var Urdu = +prompt("Enter obtained marks in Urdu");

// var Math = +prompt("Enter obtained marks in Math");
// var english = 100;
// var urdu = 100;
// var math = 100;
// var totalMarks = 300;
// var obtainedMarksenglish = english-English;
// var obtainedMarksurdu = urdu-Urdu;
// var obtainedMarksmath = math-Math;
// var obtainedMarks = obtainedMarksenglish + obtainedMarksurdu + obtainedMarksmath;
// var totalobtainedMarks = English + Urdu + Math;
// var totalpercentage = (totalobtainedMarks / totalMarks) * 100;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1><br>");
// document.write("<h3>English " + english + "-----------" + English + "-----------" + percentage +"%</h3>");
// document.write("<h3>Urdu " + urdu + "-----------" + Urdu + "-----------" + percentage + "%</h3>");
// document.write("<h3>Math " + math + "-----------" + Math + "-----------" + percentage + "%</h3>");
// document.write("Total Marks: " + totalMarks +  "-----------" + " Obtained Marks: " + totalobtainedMarks + "-----------" + " Percentage: " + totalpercentage + "% ");




// ************Chapter 09-11************

// **Question#1**

// var city = prompt ("Enter city name").toUpperCase();
// if (city == "KARACHI") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + city);
// }


// **Question#2**

// var gender = prompt("Enter your gender (male/female)").toLowerCase();
// if (gender == "male") {
//     alert("Good Morning Sir");
// } else if (gender == "female") {
//     alert("Good Morning Ma'am");
// } else {
//     alert("Invalid input");
// }


// **Question#3**

// var color = prompt("Enter traffic signal color (red/yellow/green)").toLowerCase();
// if (color == "red") {
//     alert("Must Stop");
// }
// else if (color == "yellow") {
//     alert("Ready to move");
// }
// else if (color == "green") {
//     alert("Move now");
// }


// **Question#4**

// var fuel = prompt("Enter remaining fuel in car in litres").toLowerCase();
// if ("fuel < 0.25 litres") {
//     alert("please refill the fuel in your car");
// }


// **Question#5**

// var a=4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b=82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c=12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
//     alert("false");
//     }  

// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// **Question#6**

// var marks1 = +prompt("Enter subject 1 marks");
// var marks2 = +prompt("Enter subject 2 marks");
// var marks3 = +prompt("Enter subject 3 marks");
// var totalMarks = 300;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;


// if (percentage >= 80) {
//     document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: A-One <br> Remarks: Excellent</h3>");
// } else if (percentage >= 70) {
//      document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: A <br> Remarks: Good</h3>");
// } else if (percentage >= 60) {
//      document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: B <br> Remarks: Needs Improvement</h3>");
// } else if (percentage < 60) {
//      document.write("<h1>Marks Sheet</h1><br>");
//     document.write("<h3>Total-marks: 300 <br> obtained-marks: " + obtainedMarks + "<br> percentage: " + percentage + "% <br> Grade: C <br> Remarks: Fail</h3>");
// }


// **Question#7**

// var secretNumber = 3;
// var guess = +prompt("Guess the secret number (between 1 and 10)");

// if (guess == secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess == secretNumber + 1) {
//     alert("Close enough to the correct answer");
// }
// else {
//     alert("Wrong answer, try again!");
// }


// **Question#8**

// var number = +prompt("Enter a number to check if it's divisible by 3");
// if (number % 3 == 0) {
//     alert(number + " is divisible by 3");
// } else {
//     alert(number + " is not divisible by 3");
// }


// **Question#9**

// var number = +prompt("Enter a number to check if it's even or odd");
// if (number % 2 == 0) {
//     alert(number + " is an even number");
// } else {
//     alert(number + " is an odd number");
// }


// **Question#10**

// var temperature = +prompt("Enter the temperature");
// if (temperature > 40) {
//     alert("It is too hot outside.");
// }else if (temperature > 30) {
//     alert("The weather today is normal.");
// }else if (temperature > 20) {
//     alert("Todays weather is cool.");
// }else if (temperature > 10) {
//     alert("OMG! todays weather is so cool.");
// }
// else {
//     alert("It's very cold outside.");
// }


// **Question#11**

// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operation = prompt("Enter operation (+, -, *, /, %)");
// var percentage = (firstNumber / secondNumber) * 100;
// if (operation == "+") {
//     var result = firstNumber + secondNumber;
//     alert(firstNumber + " + " + secondNumber + " = " + result);
// }else if (operation == "-") {
//     var result = firstNumber - secondNumber;
//     alert(firstNumber + "-" + secondNumber + "=" + result);
// }else if (operation == "*") {
//     var result = firstNumber * secondNumber;
//     alert(firstNumber + "*" + secondNumber + "=" + result);
// }else if (operation == "/") {
//     var result = firstNumber / secondNumber;
//     alert(firstNumber + "/" + secondNumber + "=" + result);
// }else if (operation == "%") {
//     alert(percentage + " % ");
// }


// ************Chapter 12-13************


// **Question#1**

// var character = prompt("Enter a character (number, uppercase letter, or lowercase letter)");
// var string = prompt ("Enter a character (number, uppercase letter, or lowercase letter)");
// var ASCII = "A=65 , Z=90 , a=97 , z=122 , 0=48 , 9=57";
// var code = string.charCodeAt();
// if (code === 65) {
//     alert("Variable A and its ASCII code is 65");
// }else if (code === 90) {
//     alert("Variable Z and its ASCII code is 90");
// }else if (code === 97) {
//     alert("Variable a and its ASCII code is 97");
// }else if (code === 122) {
//     alert("Variable z and its ASCII code is 122");
// }else if (code === 48) {
//     alert("Variable 0 and its ASCII code is 48");
// }else if (code === 57) {
//     alert("Variable 9 and its ASCII code is 57");
// }else{
//     alert("no")
// }


// **Question#2**

// var int1 = +prompt("Enter first integer");
// var int2 = +prompt("Enter second integer");
// if (int1 > int2) {
//     alert(int1 + " is greater than " + int2);
// } else if (int1 < int2) {
//     alert(int1 + " is less than " + int2);
// } else {
//     alert(int1 + " is equal to " + int2);
// }


// **Question#3**

// var number = +prompt ("Enter a number");
// if (number > 0) {
//     alert(number + " is a positive number");
// } else if (number < 0) {
//     alert(number + " is a negative number");
// } else {
//     alert(number + " is zero");
// }


// **Question#4**

// var vowel = prompt("Enter a character");
// vowel = vowel.toLowerCase();
// if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
//     alert(vowel + " is a vowel");
// }else {
//     alert(vowel + " is not a vowel");
// }


// **Question#5**

// var correctPassword = "password123";
// var userPassword = prompt("Enter your password");
// if (userPassword === "") {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct password!");
// } else {
//     alert("Incorrect password...");
// }


// **Question#6**

// var greeting;
// var hour = 13;
// if (hour < 18) { greeting = "Good day"; }
// else { greeting = "Good evening"; }


// **Question#7**

// var time = +prompt("Please Enter time:"," Format Like: 1900 ");
// if (time >= 0000 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else if (time >= 2100 && time < 2400) {
//     alert("Good night!");
// }else {
//     alert("Please enter a correct time");
// }




// ************Chapter 14-16************


// **Question#1**

// var studentNames = []; 


// **Question#2**

// var studentNames = new Array();



// **Question#3**

// var stringArray = ["apple", "banana", "cherry"];
// alert(stringArray);



// **Question#4**

// var numberArray = [1, 2, 3, 4, 5];
// alert(numberArray);



// **Question#5**

// var booleanArray = [true, false, true];
// alert(booleanArray);



// **Question#6**

// var mixedArray = ["apple", 1, true, "banana", 2, false];
// alert(mixedArray);


// **Question#7**

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1><br>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }



// **Question#8**

// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;
//     document.write("<h2>Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%</h2><br>");
// }


// **Question#9**

// var colorNames = ["Red", "Green", "Blue"];
// // a. Add a color to the beginning
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(colorToAddBeginning);
// document.write("<h2>After adding " + colorToAddBeginning + " to the beginning:</h2>");
// document.write(colorNames + "<br><br>");

// b. Add a color to the end
// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colorNames.push(colorToAddEnd);
// document.write("<h2>After adding " + colorToAddEnd + " to the end:</h2>");
// document.write(colorNames + "<br><br>");

// c. Add a color at a specific index
// var colorToAddIndex = prompt("Enter a color to add at a specific index:");
// var index = prompt("Enter the index at which to add the color:");
// colorNames.splice(index, 0, colorToAddIndex);
// document.write("<h2>After adding " + colorToAddIndex + " at index " + index + ":</h2>");
// document.write(colorNames + "<br><br>");

// d. Remove the first color
// colorNames.shift();
// document.write("<h2>After removing the first color:</h2>");
// document.write(colorNames + "<br><br>");

// e. Remove the last color
// colorNames.pop();
// document.write("<h2>After removing the last color:</h2>");
// document.write(colorNames + "<br><br>");

//f. Add a color from a specific index
// var indexToAdd = prompt("Enter the index of the color to add:");
// var colorTo = prompt("Enter the color to add:");
// colorNames.splice(indexToAdd, 0, colorTo);
// document.write("<h2>After adding the color at index " + indexToAdd + ":</h2>");
// document.write(colorNames + "<br><br>");

// g. Remove a color from a specific index
// var indexToRemove = prompt("Enter the index of the color to remove:");
// colorNames.splice(indexToRemove, 1);
// document.write("<h2>After removing the color at index " + indexToRemove + ":</h2>");
// document.write(colorNames + "<br><br>");


// **Question#10**

// var studentScores = [320, 230, 480, 120];
// studentScores.sort();
// document.write("<h2>Scores of Students: " + studentScores + "</h2><br>");
// document.write("<h2>Ordered Scores of Students: " + studentScores + "</h2><br>");


// **Question#11**

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 4);
// document.write("<h2>Cities List:</h2>");
// document.write(cities + "<br><br>");
// document.write("<h2>Selected Cities List:</h2>");
// document.write(selectedCities + "<br>");


// **Question#12**

// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// document.write("<h1>Array:</h1>");
// document.write("<h3>" + arr + "</h3><br><br>");
// document.write("<h1>String:</h1>");
// document.write("<h3>" + str + "</h3><br>");



// **Question#13**

//FIFO (First In First Out)

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices + "<br><br>");
// for (var i = 0; i < devices.length; i++) {
//     document.write("<h3>Out:</h3>");
//     document.write(devices[i] + "<br>");
// }


// **Question#14**

//LIFO (Last In First Out)

// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("<h2>Devices:</h2>");
// document.write(devices + "<br><br>");
// for (var i = devices.length - 1; i >= 0; i--) {
//     document.write("<h3>Out:</h3>");
//     document.write(devices[i] + "<br>");
// }


// **Question#15**

// var phoneManufacturers = [ "phoneManufacturers","Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select style='padding: 10px; font-size: 16px; margin: 90px auto; display: flex;'>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");
