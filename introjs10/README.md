# Manipulação de Arrays do JS

## for/of
FOR EACH
```javascript
const lista = ['🐸','💕','😎','🐱‍🐉']

for(let umitem of lista){
    console.log(umitem)
}
```

## Map
Estrutura de dados do tipo CHAVE VALOR.
```javascript
const mapa = new Map();

mapa.set('sapo','🐸');
mapa.set('coruja','🦉');
mapa.set('jacare','🐊');

console.log(mapa);
console.log(mapa.get('sapo'));
```

## SET
Gera uma lista de valores únicos.
```javascript

const listavaloresunicos = new Set();
listavaloresunicos.add('🐸');
listavaloresunicos.add('🐊');
listavaloresunicos.add('🐶');
listavaloresunicos.add('🐸');
console.log(listavaloresunicos);
```

## Parâmetros padrão (Default Parameters)
Definir valores padrão para parâmetros de entrada
```javascript
function soma (x=1, y=2){
return x + y;
}
console.log(soma());
console.log(soma(3));
console.log(soma(3,5));

let soma2 = (x=1,y=2) => x + y
console.log(soma2())
```

## Rest Parameters
Define uma coleção não limitada de valores por parâmetro.
```javascript

function outrafuncao(){
    for(let umitem of arguments){
        console.log(umitem)
    }
}
outrafuncao();
outrafuncao(1);

function minhafuncao(...valores){
        console.log(valores)
    }
minhafuncao()
minhafuncao(1)
minhafuncao(1,2)

console.log(1)
console.log(1,2)
console.log(1,2,3)

function minhafuncao2(val1, val2=2, ...valores){
    console.log("val1", val1)
    console.log("val2", val2)
    console.log(valores)
}
minhafuncao2(11,22,33,44);
```

## Desconstruir uma lista
Retirar cada elemento da lista e atruibuir a variáveis diferentes
```javascript
const lista =['🐶','🐊','🐸','🐧'];
let a, b, c, d;
[a,b,c,d] = lista;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
```

## Espalhar valores (SPREAD Operator)
Distribui os valores da lista para cada paramêtro de entrada
```javascript
function minhafunc(a,b,c,d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
minhafunc(...lista)
```