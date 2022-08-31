function sum (a,b) {
    return new Promise((resolve,reject) => {
        if(a < 0 || b < 0){
            reject("ERROOOOO KAKAKAKAK")
        }       
        setTimeout(() =>{
            resolve(a + b);
        }, 500);
    })
}
(async function () {
    const result = await sum(-2,2)
        .catch((err) => {
            console.error(err)
        });
        console.log(result);
})();