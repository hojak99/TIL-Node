// process.on('unhandleRejection', () => {});
// process.on('rejectionHandled', () => {});

// var promise = Promise.reject(new Error('fail'));

// setTimeout(() => {
//     promise.catch((err) => {
//         console.log(err.message);
//     })
// }, 0);

var promise = Promise.reject(new Error("fail"));
promise.catch(() => {});

setTimeout(() => {
    promise.catch((err) => {
        console.log(err.message);
    })
}, 0);