`Socket.io` 모듈을 이용해 소켓서버를 만드는 도중 해당 코드를 디버깅 해보면서 한 번 까보았다.

```
var io = require('socket.io');

// Express 를 이용해 server instance 를 생성했다고 가정

/* 
    listen() 함수를 통해 httpserver 와 연결한다.
*/
io = io.listen(server);
```
    
listen() 함수에 디버그를 걸어놓으면 다음과 같은 코드를 볼 수 있다. 그래서 `Socket.io` 도큐먼트에서도 다음과 같이 명시되어 있다. 
> server.listen(httpServer[, options])  
Synonym of server.attach(httpServer[, options]).
```
Server.prototype.listen = Server.prototype.attach = function(srv, opts) {
    ...
}
```
<br>
이제 listen() 함수의 전체적인 코드를 한 번 확인해보자.

```
Server.prototype.listen =
Server.prototype.attach = function(srv, opts){

  // 인자로 받은 srv 변수가 함수인지 검사하는 것 같다. 
  // 해당 변수가 함수를 담고 있으면 안된다.
  if ('function' == typeof srv) {
    var msg = 'You are trying to attach socket.io to an express ' +
    'request handler function. Please pass a http.Server instance.';
    throw new Error(msg);
  }

  // srv 변수가 http.Server 인스턴스거나 port 번호여야 하는 것 같다.
  if (Number(srv) == srv) {
    srv = Number(srv);
  }

  // 위에서 Number(srv)를 통해 숫자로 변환한 걸 다시 if문으로 검사하는 것 같다.
  // 또한, http.Server 인스턴스가 아닌 port 번호로 받았기 때문에 http.Server 인스턴스를 생성하는 것 같다.
  if ('number' == typeof srv) {
    debug('creating http server and binding to %d', srv);
    var port = srv;
    srv = http.Server(function(req, res){
      res.writeHead(404);
      res.end();
    });
    srv.listen(port);

  }


  // 여기서부터 조금 빡세진다. 공부 좀 하고 내용 보충하겠다.
  // set engine.io path to `/socket.io`
  opts = opts || {};
  opts.path = opts.path || this.path();
  // set origins verification
  opts.allowRequest = opts.allowRequest || this.checkRequest.bind(this);

  if (this.sockets.fns.length > 0) {
    this.initEngine(srv, opts);
    return this;
  }

  var self = this;
  var connectPacket = { type: parser.CONNECT, nsp: '/' };
  this.encoder.encode(connectPacket, function (encodedPacket){
    // the CONNECT packet will be merged with Engine.IO handshake,
    // to reduce the number of round trips
    opts.initialPacket = encodedPacket;

    self.initEngine(srv, opts);
  });
  return this;
};
```