// routes/index.js

module.exports = function(app, Book){
    // Get all books
    app.get('/api/books', (request, response) => {
        Book.find((err, books) => {
            if(err) {
                return response.status(500).send({error : 'database failure'});
            } else {
                response.json(books);
            }
        });
    });

    // Get single book
    app.get('/api/book/:book_id', (request, response) => {
        Book.findOne({
            _id: request.params.book_id
        }, 
        (err, book) => {
            if(err) {
                return response.status(500).json({error:err});
            }
            if(!book) {
                return response.status(404).json({error : 'book not found'});
            }

            response.json(book);
        });
    });

    // Get book by author
    app.get('/api/books/author/:author', (request, response) => {
        // find() 메소드 두번째에 projection을 전달. 생략시 모든 field 출력
        Book.find({
            author : request.params.author
        }, {
            _id : 0,               // _id 는 출력 안함
            title : 1,             // 출력함
            published_date : 1     // 출력함
        },
        (err, books) => {
            if(err) {
                return response.status(500).json({error : err});
            }
            if(books.length === 0) {
                return response.status(404).json({error:'book not found'});
            }

            response.json(books);
        });
    });

    // Create book
    app.post('/api/books', (request, response) => {
        var book = new Book();
    
        if(typeof request.body.title === "undefined" ||
            request.body.author === undefined ||
            typeof request.body.published_date === "undefined") {

            console.error("[Undefined property]");
            response.json({result : 0});
            return;
        }

        book.title = request.body.title;
        book.author = request.body.author;
        book.published_date = new Date(request.body.published_date);

        // 다음의 함수는 데이터를 DB에 저장한다.
        book.save((err) => {
            if(err) {
                console.error("[Error Create books : "+book.title+"]");
                response.json({result : 0});
                return;
            } else {
                console.log("[Create books : "+ book.title + "]");
                response.json({result : 1});
            }
        });
    });

    // Update book 
    app.put('/api/book/:book_id', (request, response) => {
        Book.findById(request.params.book_id, (err, book) => {
            if(err) {
                return response.status(500).json({error:'database failure'});
            }
            if(!book) {
                return response.satatus(404).json({error: 'book not found'});
            }

            if(request.body.title)
                book.title = request.body.title;
            if(request.body.author)
                book.author = request.body.author;
            if(request.body.published_date)
                book.published_date = request.body.published_date;

            book.save((err) => {
                if(err) {
                    response.status(500).json({error : "failed to update"});
                    response.json({message : 'book updated'});
                }
            });
        });
    });

    // Delete book
    app.put('/api/book/:book_id', (request, response) => {

        // delete 는 데이터를 삭제하든 안하든 결과값이 같다.
        Book.remove({ _id: req.params.book_id }, function(err, output){
            if(err) { 
               return res.status(500).json({ error: "database failure" });
            }

            res.status(204).end();
        })
    });
}