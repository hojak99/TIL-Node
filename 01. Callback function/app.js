/**
 * 20180225. Callback function
 * 자바스크립트에서는 function을 변수 안에 담을 수 있고, 다른 함수에
 * 전달할 수도 있다. 또한, 함수에서 만들어지고 반환될 수도 있다.
 */

var plus = function(a, b, callback) {
    var result = a+b;

    if(typeof callback == "function") {
        callback(result);       // 인자로 받은 함수 사용
    }
};
plus(1, 5, function(res){
    console.log(res);
});

var friends = ["안녕", "빠이", "꺼져", "싫어", "ㅇㅈ"];
friends.forEach(function(eachName, index){
    console.log(index+1 + " : " + eachName);
});