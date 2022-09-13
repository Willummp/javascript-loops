const prompt = require("prompt-sync")();

let total = 0
let n1 = 0

n1 = parseInt(prompt(`Digita um numero do teclado:  `));

do{
    n1 = parseInt(prompt('Digita um numero do teclado:  '));

    if (n1>0){
        total += n1
    }
}while(n1!=0)

console.log(`A soma dos valores é ${total}`)
