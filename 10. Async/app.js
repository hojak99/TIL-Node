// function a () {
//     setTimeout(() => {
//         console.log("1");
//     }, 1000);
// }

// function b() {
//     setTimeout(()=> {
//         console.log(2);
//     }, 3000);
// }


// b();
// a();

function a() {
    b();
    console.log("a");
}

function b() {
    console.log("b");
}

a();