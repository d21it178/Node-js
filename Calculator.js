//Create local NodeJS Custom Module “Calculator” and import it and use the module in current project.

exports.add = function (x, y) { 
    return x + y; 
    
}; 
    
exports.sub = function (x, y) { 
    return x - y; 
}; 
    
exports.mult = function (x, y) { 
    return x * y; 
}; 
    
exports.div = function (x, y) { 
    return x / y; 
};

var calculator = require('./Calculator'); 
var x = 50, y = 10; 
console.log("Addition of 50 and 10 is "
                   + calculator.add(x, y)); 
    
console.log("Subtraction of 50 and 10 is "
                   + calculator.sub(x, y)); 
    
console.log("Multiplication of 50 and 10 is "
                   + calculator.mult(x, y)); 
    
console.log("Division of 50 and 10 is " 
                   + calculator.div(x, y)); 