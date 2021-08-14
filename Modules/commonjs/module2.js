const module1  = require('./module1');

const printM = new module1.exp1('print1')
console.log(printM.param1);

const printN = module1.exp2;
console.log(printN);

const printO = module1.cf('print2');
console.log(printO);

