let ageString = prompt('Digita a idadee ');
let age = Number(ageString);

while (age< 18){
    ageString = prompt('O SITE SO PODE SER ACESSADO POR MAIORES DE IDADE, digite dnv a idade '); // obrigando a pessoa a digitar a idade dnv
    age = Number(ageString);
}

document.write(`Seja bem vinde`);