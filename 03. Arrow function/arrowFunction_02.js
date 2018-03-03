/**
 * this 의 차이를 알아보겠다. 마지막 out() 함수를 호출하는 코드에 주석이 바로 출력 결과이다.
 * 아래와 같이 출력이 되는 이유는 화살표 함수에서는 this 가 바인딩하지 않기 때문에 이런 출력 결과가 생기는 것이다.
 * 
 * 그래서 화살표 함수가 사용된 콜백함수 내에서는 this를 사용하지 말아야 한다고 한다.
 */

var thisTest = "global variable";

var nomalFunc =  {
    thisTest : "nomal",
    out : function() {
        console.log(this.thisTest);
    }
}

var arrowFunc = {
    thisTest : "nomal",
    out : () => {
        console.log(this.thisTest);
    }
}

nomalFunc.out();        // "nomal" 출력
arrowFunc.out();        // "undefiend" 출력