/**
 * module.exports 는 속성이나 메소드를 하나만 정의할 수 있다.
 * 파일 자체를 속성이나 메소드로 사용하는 방식.
 */

module.exports = function(app, fs, parser) {
    
    app.get('/', function(request, response) {
        var session = request.session;
        session.username = "hojak99";

        console.log("username : "+ session.username);
    });

    app.get('/delete', function(request, response) {
        var session = request.session;
        session.destroy(function(err) {
            // 이 콜백함수에서는 session 에 접근할 수 없음.
        });
    });
}