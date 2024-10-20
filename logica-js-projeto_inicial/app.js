// O alert serve para exibir uma msg na tela.
alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;

// O prompt serve para receber informações de usuário.
let chute = prompt('Escolha um número entre 1 e 10');

if (numeroSecreto == chute) {
    console.log('Isso aí! Você descobriu o numéro secreto (5)');
} else {
    console.log('Vish, você errou o número secreto.')
}
