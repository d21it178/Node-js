const fs = require('fs');
const readline = require('readline');

const file = readline.createInterface({
input: fs.createReadStream('input.txt'),
output: process.stdout,
terminal: false
});

let count = 1;

let num1;
let num2;

file.on('line', (line) => {
    if(count == 1){
    num1 = parseInt(line);
    } else if(count == 2){
    num2 = parseInt(line);
    } else if(count == 3){
    let total = 0;
    if(line == "ADD")
    total = num1 + num2;
    else if(line == "SUB")
    total = num1 - num2;
    else if(line == "MUL")
    total = num1 * num2;
    else if(line == "DIV")
    total = num1 / num2;
    
    fs.appendFile('output.txt', `${total}\n`, function (err) {
    if (err) {
    
    } else {
    }
    })
    count = 0;
    }
    count += 1;
    });