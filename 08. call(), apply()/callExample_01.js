/**
 * 이번엔 call() 메소드에 대해서 알아볼 시간이다.
 * 
 * callFunc() 함수를 호출하는 코드를 보면 call, apply 함수에 null 인자가 들어가는 부분을 볼 수 있다.
 * 이러한 부분들은 "this 를 대체" 하는 것이다.
 * 
 * call() 과 apply() 메소드의 차이는 _02.js 파일에서 자세히 알아보도록 하겠다.
 */

 var callFunc = function(a, b, c) {
    console.log(a+", "+b+", "+c);
    return a+b+c;
 }

 callFunc(1, 2, 3);                 // "1, 2, 3"
 callFunc.call(null, 1, 2, 3);      // "1, 2, 3"
 callFunc.apply(null, [1, 2, 3]);   // "1, 2, 3"
 

 
var callFunc_1 = {
    test : "variable",
    out : function() {
        console.log(this.test);
    }
}

var testObj = {
    // this 로 가리키는 변수명은 같아야 한다.
    test : "testObj"
}

callFunc_1.out();               // variable
callFunc_1.out.call();          // undefined
callFunc_1.out.call(null);      // undefined
callFunc_1.out.call(testObj);   // testObj
callFunc_1.out.apply(testObj);  // testObj