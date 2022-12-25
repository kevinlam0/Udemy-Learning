/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

var word = "hello"
x = 0
// While Loop
while (x<5) {
    console.log(word)
    x++
}

// For Loop

for (let x = 0; x < 5; x++) {
    console.log(word);
    
}




/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
num = 0 
while (num < 26) {
    if ((num%2) !== 0){
        console.log(num);
    }
    num+=1
}

// METHOD TWO
// For Loop
for (let i = 0; i <= 25; i++) {
    if ((i%2) != 0) {
        console.log(i);
    };
    
}