/*
Uma empresa desenvolveu uma pesquisa para saber as características 
psicológicas dos indivíduos de uma região. Para tanto, a cada uma das pessoas era perguntado:
idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções (1, se a pessoa era calma; 2,
se a pessoa era nervosa e 3, se a pessoa era agressiva). 
Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: 

*/
const prompt = require("prompt-sync")();

let i = 0;
let qdCalmas = 0;
let qdMNervosas = 0;
let qdOcalmos = 0;
let qdHAgressivos =0;
let qdNervosos40 = 0;
let qdCalmos18 = 0;

while (i < 3) {
    const idade = parseInt(prompt(`Digite sua idade: `));
    console.log(`Escolha seu gênero, entre: `);
    console.log(`1   -   Homem\n`);
    console.log(`2   -   Mulher\n`);
    console.log(`3   -   Outro\n`);
    const sexo = parseInt(prompt('Escolha a opção de gênero: '));
    console.log(`Escolha seu humor entre`);
    console.log(`1   -   Calmo\n`);
    console.log(`2   -   Nervoso\n`);
    console.log(`3   -   Agressivo\n`);
    const humor = parseInt(prompt(`Escolha a opção de humor: `));

    if(humor == 1){
        qdCalmas++;
    }if(sexo== 2 && humor==2){
        qdMNervosas++
    }if(sexo== 1 && humor==1){
        qdOcalmos++;
    }if (humor==3 && sexo ==1){
        qdHAgressivos++
    }if (humor==2 && idade>40){
        qdNervosos40++
    }if(humor==1 && idade <18){
        qdCalmos18++
    }

    i++;
}
console.log(`\nO total de pessoas calmas é ${qdCalmas}`);
console.log(`\nO total de mulheres nervosas é ${qdMNervosas}`);
console.log(`\nO total de OUTROS calmes é ${qdOcalmos}`);
console.log(`\nO total de homens agressivos é ${qdCalmas}`);
console.log(`\nO total de pessoas nervosas acima dos 40 anos é ${qdNervosos40}`);
console.log(`\nO total de pessoas calmas acima dos 18 é ${qdCalmos18}`);




