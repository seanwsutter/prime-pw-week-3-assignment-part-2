console.log('****** Loops Practice *******');
/* NOTES
* a 'for' loop repeats until condition evalutates to 'false'
* for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
* for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
* Statement 1 is executed (one time) before the execution of the code block.
* Statement 2 defines the condition for executing the code block.
* Statement 3 is executed (every time) after the code block has been executed.
or:
* Statement 1 sets a variable before the loop starts (let step = 0).
* Statement 2 defines the condition for the loop to run (step must be less than 5).
* Statement 3 increases a value (i++) each time the code block in the loop has been executed.

* a 'while' loop will continue to execute its statements as long as the condition evalutes to 'true'
* while (condition)
  statement
* if the condition becomes 'false', statement within loop stops executing

* The following while loop iterates as long as n is less than 3:

* let n = 0;
  let x = 0;
  while (n < 3) {
    n++;
    x += n;
 }
* With each iteration, the loop increments n and adds that value to x.
  Therefore, x and n take on the following values:
* After the first pass: n = 1 and x = 1
* After the second pass: n = 2 and x = 3
* After the third pass: n = 3 and x = 6
* After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

*/

// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<=10; i+=2) { // QUESTION - should it be i < 11
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>=0; i--) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let i=0; i<stars.length; i++) {
  console.log(stars[i]);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = 0;
while (i < stars.length) {
  console.log(stars[i]);
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i = 0;
while (i <= 5) { // QUESTION - Does it need to be i < 6?
  console.log(i);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
i = 10;
while (i >=5) { // QUESTION - Does it need to be i > 4?
  console.log(i);
  i--;
}
