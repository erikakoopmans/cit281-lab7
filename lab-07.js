/*

CIT 281: Lab 07
Author: Erika Koopmans

*/

class CustomError extends Error {
    constructor(args){
        super(args);
        this.message = "Custom Error";
    }

    throwGenericError(){
        throw new Error("Generic Error");
    }

    throwCustomError(){
        throw new CustomError().message;
    }
}

const newError = new CustomError();

console.log("Force Generic Error");
try{
    console.log("Generic Error Try Block");
    newError.throwGenericError();
} catch {
    console.log("Generic Error Catch Block");
    console.log(newError.throwGenericError());
} finally {
    console.log("Generic Error Finally Block");
}

console.log("Force Custom Error");
try{
    console.log("Custom Error Try Block");
    newError.throwCustomError();
} catch {
    console.log("Custom Error Catch Block");
    console.log(newError.throwCustomError());
} finally {
    console.log("Custom Error Finally Block");
}

