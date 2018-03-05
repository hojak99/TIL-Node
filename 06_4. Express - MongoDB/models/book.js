var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title : String,
    author : String,
    published_date : {
        type : Date,
        default : Date.now()
    }
});

// 모듈화하기 위해 module.exports 사용
// mongoose.model() 은 데이터베이스에서 데이터를 읽고, 생성하며 수정하는 인터페이스를 정의한다.
// 여기서 'book' 은 collection 이름
module.exports = mongoose.model('books', bookSchema);

/*
    다음과 같이 사용 가능

    var book = new Book({
        name : "node tutorial",
        author : "hojak"
    });

    book.save((err, book) => {
        if(err) return console.error(err);
        console.dir(book);
    })

*/