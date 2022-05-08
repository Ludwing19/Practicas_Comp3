const promise = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('se resolvio la promesa'), 1200)

});

promise.then((Response)=> {
    console.log(Response)
});