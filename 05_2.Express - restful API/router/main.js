/**
 * module.exports 는 속성이나 메소드를 하나만 정의할 수 있다.
 * 파일 자체를 속성이나 메소드로 사용하는 방식.
 * 
 * HTTP 메소드
 * 1. GET : 조회
 * 2. PUT : 생성 및 업데이트
 * 3. DELETE : 제거
 * 4. POST : 생성
 */

module.exports = function(app, fs, parser) {
    
    app.get('/', function(req, res) {
        res.render('index', {
            title: "My Homepage",
            length: 5
        })
    });

    // GET /list
    app.get('/list', function(req, res) {
        fs.readFile(__dirname + "/../data/" + "user.json", "utf-8", function(err, data) {
            console.log(data);
            res.end(data);
        });
    });


    // GET /getUser/:username
    app.get('/getUser/:username', function(req, res) {
        fs.readFile(__dirname+"/../data/user.json", "utf-8", function(err, data) {
            var users = JSON.parse(data);
            res.json(users[req.params.username]);       // 쿼리스트링 값으로 json 에서 데이터를 가져온다.
        })
    });

    
    // POST /addUser/:username
    // body : {"password" : "~", "name" : "~"} 형식의 json이 서버에 전달된다고 가정
    app.post('/addUser/:username', parser, function(req, res){
        var result = {};
        var username = req.params.username;
        console.log("username : " + username);
        console.log("body : " + req.body.password);

        if(!req.body.password || !req.body.name) {
            result.success = 0;
            result.error = "invalid request";
            res.json(result);
            return;
        }

        fs.readFile(__dirname + "/../data/user.json", "utf-8", function(err, data) {
            var users = JSON.parse(data);
            if(users.username) {
                result.success = 0;
                result.error = "duplicate";
                res.json(result);
            }

            users.username = req.body;

            fs.writeFile(__dirname + "/../data/user.json",
                            JSON.stringify(users, null, '\t'), "utf-8", function(err, data) {
                result = {"success" : 1};
                res.json(result);
            })
        })
    }); 


    // PUT /updateUser/:username            
    // body : {"password" : "~" , "name" : "~"}
    // PUT API 는 요청을 몇 번 와도, 같은 결과를 보장해야 한다. (POST API 와 비슷하므로 생략)


    // DELETE /deleteUser/:username
    app.delete('/deleteUser/:username', function(req, res) {
        var result = {};
        
        fs.readFile(__dirname + "/../data/user.json", "utf-8", function(err, data) {
            var users = JSON.parse(data);

            if(!users[req.params.username]) {
                result.success = 0;
                result.error = "not found";
                res.json(result);
                return;
            }

            delete users[req.params.username];
            fs.writeFile(__dirname + "/../data/user.json", JSON.stringify(users, null, "\t"), "utf-8", function(err, data) {
                result.success = 1;
                res.json(result);
                return;
            })
        })
    });
}