let lista3 = ['☕','☕','🥛','☕']

//lista3[2] = 'suco'
/*for(let i=0; i<4; i++){
    if(lista3[i] === '🥛'){
        lista3[i] = '🥤'
    }
}*/
//let novalista = lista3.map((item) => (item==='🥛'?'🥤':item))
//let novalista = lista3.map((item) => (item==='🥛'?'LEITE':'alimento'))
/*novalista = lista3.map(function (item){
    if(item === '🥛')
        return '🥤'
    return item;
})*/
/*let novalista = lista3.map((item) => (item==='☕'?1:0))
let total = novalista.reduce((soma, item) => soma + item)
console.log(total);

total = lista3.map((item) => (item==='☕'?1:0))
              .reduce((soma, item) => soma + item)
console.log(total);*/

/*let novalista = lista3.filter((item) => item=== '☕')
console.log(novalista)*/

/*let resultado = lista3.find((item) => item === '☕')
console.log(resultado);

let posicao = lista3.findIndex((item) => item === '🥛');
console.log(posicao);*/

/*lista3.fill('🐸',1); //vai deixar de trocar por sapos o numero colocado
console.log(lista3);*/

let resultado = lista3.some((item) => item === '🐸');
console.log(resultado)
resultado = lista3.some((item) => item === '🥛');
console.log(resultado)

resultado = lista3.every((item) => item === '🥛');
console.log(resultado)



