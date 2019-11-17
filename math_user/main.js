var math_example = require('math_example');

var result = 0;

result = math_example.addition(5, 10);
console.log('addition(5,10) = ' + result); 
 

result = math_example.subtraction(50,10); 
console.log('subtraction(50,10) = ' + result); 
 
result = math_example.multiplication(3,7);
console.log('multiplication(3,7) = ' + result); 
 
result = math_example.division(27,3); 
console.log('division(27,3) = ' + result); 
 
result = math_example.fibonacci(3); 
console.log('fibonacci(3) = ' + result); 
 
 
console.log('done')