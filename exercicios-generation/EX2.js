const prompt = require('prompt-sync')()

let pares =0 
let impar =0
let numeros = []

for (let i=0 ; i<10; i++){
    numeros[i] = parseInt(prompt(`Digita os 10 numeros`));
    if(numeros[i] % 2 == 0){
        pares++
    }
    else{
        impar++
    }
}
console.log(`Os numeros ${pares} sao pares`);
console.log(`Os numeros ${impar} sao impares`);