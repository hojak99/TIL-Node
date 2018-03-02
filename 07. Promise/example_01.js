
var fun1 = function(arg) {
    return new Promise(function(resolve, reject) {
        resolve("fun1 : "+ arg);
    });
}

var fun2 = function(arg) {
    return new Promise(function(resolve, reject) {
        resolve("fun2 : "+arg);
    });
}

var fun3 = function(arg) {
    return new Promise(function(resolve, reject) {
        resolve("fun3 :" + arg);
    })
}

var errFun = function(arg) {
    return new Promise(function(resolve, reject) {
        reject(Error("error errFun :" + arg));
    })
}

var promise = fun1("Start");
promise.then(fun2).then(fun3).then(console.log, console.err);        // "fun3 :fun2 : fun1 : Start"


/*
해당 오류를 보면 알 수 있듯이, promise.then()함수는 promise 변수에 쌓이는게 아니라는 것을 볼 수 있다.

Error: error errFun :fun1 : Start
    at C:\Users\KwonJH\Documents\GitHub\TIL-Node\06. Promise\app.js:22:16
    at new Promise (<anonymous>)
    at errFun (C:\Users\KwonJH\Documents\GitHub\TIL-Node\06. Promise\app.js:21:12)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
    at Function.Module.runMain (module.js:686:11)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
*/
promise.then(errFun).catch(console.log, console.err);                