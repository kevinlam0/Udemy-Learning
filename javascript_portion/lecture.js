// Part 3 Exercise 
// var weight = prompt("What is the weight in pounds (lbs)? " )
// var inKilograms = weight* 0.454
// alert("That is: " + inKilograms+ " kilograms")
// console.log("Conversion Completed")

// Part 9 Project 
var first = prompt("What is your first name?: ")
var last = prompt("What is your last name?: ")
var age = prompt("What is your age?: ")
var height = prompt("How tall are you in cm?: ")
var pet = prompt("What is your pet's name?: ")
alert("Thank you for your information.")

if (first[0] == last[0] && 20<age<30 && height>=170 && pet[pet.length-1] == "y") {
    console.log("You are the spy!");
}else{console.log("There is nothing to see here...");}