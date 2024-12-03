alert('Boas vindas ao jogo do número secreto');

let maior_num = parseInt(prompt('O número secreto tem que ir até qual número?'));
let num_secreto = parseInt(Math.random() * maior_num + 1 );
console.log(num_secreto);
let chute;
let tentativas = 1;

while (chute != num_secreto){
    chute = prompt(`Digite um número entre 1 e ${maior_num}`);

    if (chute == num_secreto){
        break;
    } else {
        if (num_secreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else if (num_secreto < chute) {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas';
alert(`Isso aí! Você descobriu o número secreto ${num_secreto} com ${tentativas} ${palavraTentativa}`)