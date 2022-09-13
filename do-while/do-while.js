let option;
let optionString;

do {
    optionString = prompt("Escolha uma opção\n\n1 - Caviar\n2 - Almondega\n3 - Feijoada ");
    option = Number(optionString);
}   while (option < 1 || option > 3);

document.write('<br><br>') // duas quebra de linha no html
switch (option) {
    case 1:
        document.write('Escolheu Caviar');
        break;
    case 2:
        document.write('Escolheu Almondega');
        break;
    case 3: 
        document.write('Escolheu Feijoada');
        break;
}