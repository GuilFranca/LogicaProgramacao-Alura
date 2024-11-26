// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contador = parseInt(prompt('Digite um número: '))
let base = 0

while (base != contador + 1 ){
    console.log(base);
    base++;
}