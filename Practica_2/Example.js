const operation = (v1,v2, ttl) => {
    setTimeout(() => {
        return ttl(v1,v2);
    }, 1200);
}

operation(75,5, (a,b) => {
    console.log(`${a+b}`);
});