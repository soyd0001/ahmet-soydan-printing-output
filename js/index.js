// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

var a = 3;
var b = 5;
var c;

let equation = '';
equation += 'var a = 3;';
equation += '\n';
equation += 'var b = 5;';
equation += '\n';
equation += 'var c;';
equation += '\n';
equation += '------------------------------';
equation += '\n';
equation += 'a + b = ' + (a + b);
equation += '\n';
equation += 'a - b = ' + (a - b);
equation += '\n';
equation += 'a * b = ' + (a * b);
equation += '\n';
equation += 'a / b = ' + (a / b);
equation += '\n';
equation += 'a % b = ' + (a % b);
equation += '\n';
equation += 'a == b = ' + (a == b);
equation += '\n';
equation += 'a != b = ' + (a != b);
equation += '\n';
equation += 'a > b = ' + (a > b);
equation += '\n';
equation += 'a < b = ' + (a < b);
equation += '\n';
equation += '!a && !c = ' + (!a && !c);
equation += '\n';
equation += '!a || !c = ' + (!a || !c);
equation += '\n';

alert(equation);

var first_name = 'Ahmet';
var last_name = 'Soydan';
var email = 'soyd0001@algonquinlive.com';
var output;
output = 'My name is ' + first_name + ' ' + last_name + '.' + 'You can contact me at ' +  email;

alert(output);
