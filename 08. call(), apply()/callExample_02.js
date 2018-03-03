/**
 * 좀 더 유용하게 call() 과 apply() 메소드를 사용해보겠다.
 * 
 * apply() 메소드는 배열이나 arguments 객체로 넘기거나
 * call() 메소드는 매개변수를 각각 넘긴다.
 */


function sum(a, b) {
    return a+b;
}

function applySum_1(a, b) {
    return sum.apply(this, arguments);  // arguments 객체로 넘김
}

function applySum_2(a, b) {
    return sum.apply(this, [a, b]);     // 베열로 넘김
}

function callSum_3(a, b) {
    return sum.call(this, a, b);
}

console.log(applySum_1(1, 2));       // 3
console.log(applySum_2(1, 2));       // 3
console.log(callSum_3(1, 2));       // 3