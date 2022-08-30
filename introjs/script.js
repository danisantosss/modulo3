//alert('Ola mundo')
console.log("mensagem bonita");

document.getElementById('titulo').innerHTML = "UNIVILLE";

let resposta = confirm("Você mora em Joinville?");
alert("sua resposta foi " + resposta);

let outraresposta = prompt("Digite seu nome");
alert("seu nome é " + outraresposta);

document.write("<p class='azul'>testando...</p>");

const style = document.createElement('style');
style.textContent = 'body {background-color : green; }';
document.head.append(style);