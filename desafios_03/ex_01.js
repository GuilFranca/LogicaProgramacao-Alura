// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 1
console.log(contador)

while (contador != 11) {
    console.log(`Contador while = ${contador}`)
    contador ++;
}

for (let i = 1; i <= 10; i++) {
    console.log(`Contador for = ${i}`)
    // alert(`Contador = ${i}`)
}