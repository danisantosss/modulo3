let pessoa = {
    //atributos
    nome: "Maria",
    idade: 17,
    casada: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "555-1234","999999999"
    ],
    geraEndereco: function(){
        let todosOsTel = "";
        for(let umTelefone of this.telefones){
            todosOsTel += umTelefone + " ";
        }
        return `${this.cidade.nome} - ${todosOsTel}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto() {
        return this.nome;
    },
    set nomeCompleto(nome){
        this.nome = nome;
    }

};
pessoa.nomeCompleto = "Maria Leroni"
console.log(pessoa.nomeCompleto);

console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));
console.log(typeof(pessoa));
console.log(pessoa); 
console.log(pessoa.nome);
console.log(pessoa['nome']);
pessoa.nome = "Maria Leroni";
console.log(pessoa.nome);
pessoa['nome'] = "Maria Leroni";
console.log(pessoa['nome']);

pessoa.endereco = "Rua oceano atlântico 397";
console.log(pessoa);

console.log(JSON.stringify(pessoa))

let objTexto = '{"nome":"mariazinha"}';
let objjs = JSON.parse(objTexto);
console.log(objjs);