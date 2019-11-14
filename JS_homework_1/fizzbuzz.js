
let result="";  // define as empty strings, else innerText outputs "undefined" at the beginning
let ternary = "";

let countToX = 30; // set value until where you want to fizz your buzz

//Q: should you always define empty variables to define type or leave them blank until they are needed?


// output to console.log example
console.log("Console.log example:");
console.log(" ");

for (let i = 1;i<=countToX;i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i+": fizzbuzz");
    }                                 // Q: should I place ; here?
    else if (i % 3 === 0) {
        console.log(i+": fizz");
    }
    else if (i % 5 === 0) {
        console.log(i+": buzz");
    } 
    else { 
        console.log(i+": "+i);
    }
};        


 // output to HTML page example
for (i = 1;i<=countToX;i++) {          // Q: why does this 2nd loop works also if I declare i (let = i) for the 2nd time?
    if (i % 3 === 0 && i % 5 === 0) {
        result += i+": fizzbuzz \n";   
    }
    else if (i % 3 === 0) {
        result += i+": fizz \n";
    }
    else if (i % 5 === 0) {
        result += i+": buzz \n";
    } 
    else { 
        result += i+": "+i+"\n";
    }
};   


// ternary operator example
for (i=1; i<=countToX;i++){
    ternary += (i % 3 === 0 && i % 5 === 0) ? i+": fizzbuzz \n" : (i % 3 === 0)? i+": fizz \n" : (i % 5 === 0) ? i+": buzz \n" : i+": "+i+"\n";
    };


    // output to html, use innerText instead of textContext
// as the latter doesn't recognize \n as new line

// Q: is this more optimal than output result to HTML for each i ?
document.body.innerText = "\n\n IF example: \n\n" + result + "\n\n\n Ternary Operator example: \n\n" + ternary; 
