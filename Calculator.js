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

var http = require('http');

http.createServer(function (req, res) {
    

    res.writeHead(200, {'Content-Type': 'text/plain'});
    var calculator = require('./Calculator'); 
    
    var x = 50, y = 10; 

    
    res.write(" Addition of 50 and 10 is "
                   + calculator.add(x, y)); 
    
                   res.write("\n Subtraction of 50 and 10 is "
                   + calculator.sub(x, y)); 
    
                   res.write("\n Multiplication of 50 and 10 is "
                   + calculator.mult(x, y)); 
    
                   res.end("\n Division of 50 and 10 is " 
                   + calculator.div(x, y)); 
                   //res.send();
                }).listen(3003);