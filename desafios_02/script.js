let diaSemana = prompt('Que dia da semana é hoje?');

if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert('Bom fim de semana!!');
} else {
    alert('Boa semana!');
}

let num = prompt('Digite um número')

if (num % 2 == 0){
    alert('O número digitado é par.');
} else {
    alert('O número digitado não é par.');
}

let pontos = parseInt(prompt('Digite quantos ponto você tem: '));

if (pontos >= 100){
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

let saldo = 100;

alert(`O saldo atual da sua conta é  de ${saldo}`);

let nome = prompt('Digite o seu nome: ');

alert("Boas-vindas " + nome);