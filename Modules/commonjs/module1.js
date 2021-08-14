class Modules1{
    param1;

    constructor(_param1){
        this.param1 = _param1;
    }
    getParam1(){
        return `Param1: ${this.param1}`
    }
}

Modules1Obj={
    param1:'This is first param from Ob of Module 1',
    param2:'This is second param from Obj of Module 1'
}

function ConstructorFun( cobj){
    this.cobjCF = cobj;
    return `Constructor Function method : ${this.cobjCF}`;
}


/**
 *  This is the one way of exporting code from one module to anothe in nodejs
 *  This is CommonJS way which is provided internally by the NodeJS
 *  In the code below the only Modules1Obj is exported and note that Modules1
 */


module.exports.exp1 = Modules1;
module.exports.exp2 = Modules1Obj;
module.exports.cf = ConstructorFun;


// exports.exp1 = Modules1;
// exports.exp2 = Modules1Obj;


// module.exports = Modules1;
// module.exports = Modules1Obj;


