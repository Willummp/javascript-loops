const prompt = require('prompt-sync')();
let idade = 0;
let jov = 0;
let velho = 0;


while (idade >= 0) {
    idade = parseInt(prompt(`Coloca a idade  `));
    
    if(idade<21){
        jov++
    }
    
    else if (idade>50) {
        velho++
    }
}
console.log(`O total de pessoas com menos de 21 anos é de: ${jov}`)
console.log(`E com mais de 50 anos é de ${velho}`)