const prompt = require("prompt-sync")();

let media = 0;
let n1 = 0;
let qt = 0;

n1  = parseInt(prompt('Digite um numero do teclado(exceto 0): '));
do{
    n1 = parseInt(prompt(`Digite um numero do teclado (exceto 0):  `));
    if (n1%3==0) {
        media += media +n1;
        qt++
        
    }
}while(n1!=0)
console.log(`A média dos valores foi: ${media/qt}`)