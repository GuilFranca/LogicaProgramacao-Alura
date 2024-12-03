// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let num1 = 5
let num2 = 3

resultado = num1 + num2

console.log(`A soma de ${num1} e ${num2} é igual a ${resultado}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
num1 = 10
num2 = 3

resultado = num1 - num2

console.log(`A subtração de ${num1} e ${num2} é igual a ${resultado}.`)

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
idade = prompt(`Digite sua idade`)

if (idade >= 18){
    alert('Você é maior de idade.')
} else {
    alert('Você não é maior de idade.')
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
numero = prompt('Digite um número')
if (numero > 0){
    alert(`${numero} é positivo`)
} else if (numero == 0){
    alert(`${numero} é igual a zero`)
} else {
    alert(`${numero} é negativo`)
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let num = 1
while (num != 11){
    console.log(num)
    num++
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt('Qual a sua nota?')

if (nota >= 7){
    console.log('Aprovado!')
} else {
    console.log('Reprovado...')
}