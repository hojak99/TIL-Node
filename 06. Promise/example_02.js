var fun1 = function(arg) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log("fun1");
                resolve("fun1 success : "+ arg + "\n");
            }, 500);
    });
}

var fun2 = function(arg) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log("fun2");
                reject(new Error("fun2 error : "+ arg + "\n"));
            }, 500);
    });
}

var fun3 = function(arg) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log("fun3");
                resolve("fun3 success : "+ arg + "\n");
            }, 500);
    });
}

var fun4 = function(arg) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log("fun4");
                reject(new Error("fun4 error : "+ arg + "\n"));
            }, 500);
    });
}

var fun5 = function(arg) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log("fun5");
                resolve("fun5 success : "+ arg + "\n");
            }, 500);
    });
}


var promise = fun1("HI");
promise.then(fun2)
.then(fun3)
.catch(console.err)
.then(fun4)
.then(fun5)
.catch(console.err)
.then(console.log);