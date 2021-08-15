declaration();
/**
 * The function declaration below is hoisted but the varibale expression is not hoised
 * The point to note here that is that is if we run this code , person variable will come 
 * as undefined but not as reference error cause the variable declaration is hoisted but not 
 * variable definition 
 */
function declaration (){
    console.log(`This is a declaration function ${person}`);
}
var person = 'Praveen';

/**
 * The function expression is not hoisted
 */
_hoistingFunction();
const _hoistingFunction = function (){
    console.log(`This is a function expression which will not be hoisted ever `);
}
