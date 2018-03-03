/**
 * 이번엔 Arrow Function 에 대해서 알아볼 시간이다.
 * 쉽게 생각하면 이 Arrow function 은 좀 더 간단하고 편하게 함수를 정의할 수 있다.
 * 
 * 하지만 this 키워드에 대해서 좀 차이가 있다.
 * 이 차이에 대해서는 _02.js 파일에서 확인해보도록 하겠다.
 */

 // 기존에 존재하던 방법
var arr = [1,2,3,4,5,6,7].map(function(x) {
     return x*x;
});

// Arrow function
var arrowFunction = [1,2,3,4,5,6,7].map(x => { return x * x })

// 두 출력값은 같다.
console.log(arr);
console.log(arrowFunction);     