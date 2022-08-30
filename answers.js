//         Section One
// 1. The difference between interpolation and
// concatentation is: interpolation is adding expression and value to a string by using  backticks.
// and concatentation is compabing or adding two strings together. 

//       Answer 01:
// 
// DRY stands for Don't Repeat Yourself, and we should pau attention to it because it allow us to avoid repetition. 

//       Answer 02:
//
// the difference between const, let, and var is that const is used when the value of the varialble is constant and won;t change, and let 
// is used when the values of the variable are dynamic, and finally var is the old syntax used to declare variables.


//         Section Two: Boolean expressions 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

//a < b
//
//c > d
//
//'Name' === 'Name'
//
//a < b < c
//
//a == a < d
//
//e = 'Kevin'
//
//48 !== '48'
//
//f !== e

 let g = 0; // I used let because we will change its value
console.log(g); // I don;t get an error if I don't use var, let, or const
g = b + c;
console.log(g);

// 10=g; this will give a SyntaxError

//               Section Three: while Loops

//   1- Infinit Loop 1
// I think the code below is not an infinit loop because by design Booleans have the 
// value 'False' as the standard value 

// while (true) {
//	 console.log('Do not run this loop');
//}

//   2- Infinit Loop I

// the code below is not an infinit loop because the variable is given a 'False' value.
// the output would be a TypeError  

//const runProgram = true;
//while (runProgram) {
//	console.log('Do not run this loop');
//	runProgram = false;
//}
  
//        3- Explain each line of the code

// HERE
////set the variable letters and give a value of the string "A"
//let letters = "A";
//// create anotehr variable named i and give it a value of Number 0
//let i = 0;
//// initiate the While loop that will run as long as i is less than 20 
//while (i < 20) {
//// add the string "A" everytime i is less than 20
//	letters += "A";
//	i++;
//}
//// the output is 21 "A" because it starts at index 0 
//console.log(letters);
//// the code wasn't what I was expecting because the code should run as long as i is less
//// that 20 which should stop at 19 and because we started at 0 then the result should be 
//// 20 "A"s


//                       Section Four: For Loops
//    1- For Loop I:

// The first part of the control panel is: initialization
// The second part of the control panel is: Condition
// The third part of the control panel is: iteration

//    2- For loop II

for(let i = 0 ; i < 1000 ; i++){
    console.log(i);
}

//     3- For Loop in Reverse:

for(let i = 999 ; i >= 0 ; i--){
    console.log(`The Value of i is:  ${i}`);
}
