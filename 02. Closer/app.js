/**
 * 20180225. Closer
 * 
 * 클로저란 외부함수의 변수에 접근할 수 있는 내부 함수를 일컫는다.
 * 그리고, 클로저는 3가지 스코프 체인을 가지는데 클로저 자신의 대한 접근,
 * 외부 함수의 변수에 대한 접근, 전역 변수에 대한 접근으로 구분 가능하다.
 */


function printName(first, second) {
    var nameIntro = "Your name is ";

    // 외부함수의 변수 및 파라미터 사용
    function makeName() {
        return nameIntro + first + " " + second;
    }
    return makeName();
}
console.log(printName("권장", "장호"));


// 클로저는 외부함수가 리턴된 이후에도 외부함수의 변수에 접근 가능함
function printName2(first) {
    var nameIntro= "HI ";
    function makeName(second) {
        return nameIntro + first +" " + second;
    }
    return makeName;
}
var name = printName2("장");
console.log(name("호"));