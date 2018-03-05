module.exports = function(app, io) {
    app.get('/test', function(request, response) {
        console.log(io);
        response.end("ㅎㅇ");
        
        debugger;
    });
}
