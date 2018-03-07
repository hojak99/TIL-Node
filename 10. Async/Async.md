# Async
이번엔 좀 늦은 감이 있지만 자바스크립트가 어떻게 동작하는지에 대해서 알아보겠다.

## Introduce
자바스크립트는 싱글 스레드 기반으로 Java, C, Python 과 다르게 먼저 실행된 코드가 완료되기 전에 해당 코드보다 나중에 실행된 코드가 더 먼저 끝날 수 있다.

다음의 코드의 결과는 1, 2 순서로 출력이 된다. b() 함수를 먼저 호출했는데도...
```
function a () {
    setTimeout(() => {
        console.log("1");
    }, 1000);
}

function b() {
    setTimeout(()=> {
        console.log(2);
    }, 3000);
}
  
b();
a();

// 1
// 2
```

## Call Stack
자바스크립트 엔진은 메모리 힙과 단일 Call Stack을 가지고 있다. 그래서 `한 번에 단 하나의 함수만 처리` 할 수 있다.  

다음의 코드를 보자.
```
function a() {
    b();
    console.log("a");
}

function b() {
    console.log("b");
}

a();

// b
// a
```

해당 코드에서는 Call Stack 에 다음과 같이 쌓인다.
1. a() : `a() 함수를 제일 먼저 호출했기 때문이다.`
2. a() -> b() : `a() 함수 내부에서 제일 먼저 b() 함수를 호출했기 때문이다.`
3. a() -> b() -> console.log("b") : `b() 함수 내부에서 제일 먼저 console.log("b")를 호출했기 때문이다.`
4. a() -> b() 
5. a()
6. a() -> console.log("a")
7. a()
8. 종료

이런 식으로 작동을 하지만, 자바스크립트에서는 자바스크립트 엔진만으로 동작하는게 아니라, Web API, Task Queue, Event Loop 도 함께 동작을 한다.

## Web API, Task Queue, Event Loop
Web API 는 브라우저에서 제공되는 API 로 주로 Ajax, Timeout 등의 비동기 작업을 수행한다. 그래서 자바스크립트에서 setTimeout 과 같은 함수를 실행하면 다음과 같이 동작한다.
1. 자바스크립트 엔진에서 Web API 로 setTimeout 함수와 함께 콜백까지 전달. 전달 뒤 Call Stack 에서 제거
2. Web API에서 setTimeout 함수를 실행
3. 완료와 동시에 Task Queue 전달 및 Web API 에서 제거
4. Event Loop 가 Call Stack 이 비어있는지 (실행 중인 작업이 있는지), Task Queue에 Task 가 존재하는지 판단해 Task Queue 의 작업을 Call Stack에 옮긴다.

위와 같은 과정을 반복한다.

이런 식으로 해서 자바스크립트가 비동기적으로 진행된다는 것이다. 어쨌든 코드 실행은 순서대로 하는 것 같다. 결과가 보장이 안 될뿐~