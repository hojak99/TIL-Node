/**
 * module.exports 는 속성이나 메소드를 하나만 정의할 수 있다.
 * 파일 자체를 속성이나 메소드로 사용하는 방식.
 */

module.exports = function(app, fs) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: "My Homepage",
            length: 5
        })
    });
}