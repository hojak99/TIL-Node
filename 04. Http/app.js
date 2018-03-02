var http = require('http');
var fs = require('fs');     // 파일 시스템 모듈
var url = require('url');  

// 서버 생성
http.createServer(function(request, response) {

    // "localhost:8080" 으로 접속 시 "/" 출력
    var pathName = url.parse(request.url).pathname;
    console.log("pathName : "+ pathName);

    if(pathName == "/"){
        pathName = "/index.html";
    }
    console.log("pathName : "+ pathName);

    fs.readFile(pathName.substr(1), function(err, data){
        if(err) {
            // 페이지 찾을 수 없을 때
            console.log("err : " + err);
            response.writeHead(404, {"Content-Type" : "text/html"});
        } else {
            // 페이지 찾았을 때
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data.toString());
        }
        
        response.end();
    });
}).listen(8080);