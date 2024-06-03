function printHello() {
    return "Hello, "
}

function sayHello(name) {
    return printHello() + name + "!";
}


function sayHello2(name) {
    return printHello() + name + "!";
}

function printMeyourArray(array) {
    array.forEach((el) => console.log(el))
}
 const a = sayHello('Alena');
 const justForFUn = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, {name: Blob, human: true}];
 const b = printMeyourArray(justForFUn);

 console.log(a)
 console.log(b)
 
function printMeyourArray2(array) {
    array.forEach((el) => console.log(el))
}



 const a2 = sayHello('Alena');


 const justForFunTwo = [true, true, true,true, 1, 2, 3, 4, 5, 6, 7, 8, 9, {name: Blob, human: true}];
 const bobo = printMeyourArray(justForFunTwo);

 console.log(bobo)


 function myBrainGotFuckedWithVMotions() {
    return true;
 }



 const isMyBrainFucked = myBrainGotFuckedWithVMotions();
 console.log('isMyBrainFucked', isMyBrainFucked)