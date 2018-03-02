# Promise
Promise 란, 쉽게 말하면 node 에서는 항상 콜백 지옥을 조심하라고 하는데 이러한 콜백지옥을 조금이라도 해결할 수 있는 패턴이다.  

Promise 를 사용하면 비동기 작업들을 순차적으로 진행하거나, 병렬로 진행하는 컨트롤이 수월해지며, 코드의 가독성이 좋아진다고 한다. 물론, Promise 를 잘 사용해야만 한다. 또한, 내부적으로 예외처리에 대한 구조가 탄탄해 오류 처리등에 대해 좀 더 가시적으로 관리해줄 수 있다는 장점이 있다고 한다.
> 출처 : http://programmingsummaries.tistory.com/325

```
function() {
    function() {
        function() {
            function () {

            }
        }
    }
}
```
