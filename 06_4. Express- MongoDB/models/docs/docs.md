# Mongoose
Mongoose 간단 설명

### SchemaTypes
- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- Objectid
- Array
  
- required : boolean 또는 function 인데 'true' 면 필수로 입력해야 한다.
- default : Any 또는 function 인데 경로의 기본값을 설정한다. 값이 함수이면 함수의 반환 값이 기본 값이 된다.
- select : boolean 으로, true과 false 값에 의해 document 가져올 때 결과 값에 포함되는지 안되는지 설정 가능하다.
- validate : function 으로, 해당 프로퍼티에 대해 유효성 검사하는 함수를 추가할 수 있다.
- get : function 으로, Object.defindProperty() 를 사용해 프로퍼티에 대한 커스텀 getter 를 정의할 수 있다.
- set : function 으로, Object.defindProperty() 를 사용해 프로퍼티에 대한 커스텀 setter 를 정의할 수 있다.
- alias : String 으로, mongoose >= 4.10.0 부터 사용 가능. 