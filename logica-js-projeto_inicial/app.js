// O alert serve para exibir uma msg na tela.
alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto) {
    // O prompt serve para receber informações de usuário.
    chute = prompt('Escolha um número entre 1 e 10');

    // Se chute for igual ao número secreto.
    // Se não for igual.
    if (numeroSecreto == chute) {
        // para concatenar uma váriavel no JS é preciso colocar uma crase no lugar das aspas.
        // Mas pode ser usado um + para concatenar sem a necessidade de crase.
        alert(`Isso aí! Você descobriu o numéro secreto ${numeroSecreto}`);
    } else {
        // tentativas += 1;
        tentativas++;

        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

console.log(`tentativas ${tentativas}`)

