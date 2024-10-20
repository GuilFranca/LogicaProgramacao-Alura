// O alert serve para exibir uma msg na tela.
alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 4;
console.log(numeroSecreto);

// O prompt serve para receber informações de usuário.
let chute = prompt('Escolha um número entre 1 e 10');

// Se chute for igual ao número secreto.
// Se não for igual.
if (numeroSecreto == chute) {
    // para concatenar uma váriavel no JS é preciso colocar uma crase no lugar das aspas.
    // Mas pode ser usado um + para concatenar sem a necessidade de crase.
    alert(`Isso aí! Você descobriu o numéro secreto ${numeroSecreto}`);
} else {
    alert('Vish, você errou o número secreto.');
}
