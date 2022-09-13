//boletim escolar
const boletim = [];
const qtdMaterias = 3;
const qtdProvas = 3;

for (let i=0; i<qtdMaterias ; i++) {
    boletim[i] = [];
    for (let j=0; j<qtdProvas ; j++) {
        const nota = prompt(`Digite a nota da ${j+1}ª prova da ${i+1}ª materia`);
        boletim[i][j] = Number(nota);
    }
}for (let i=0; i<qtdMaterias ; i++) {
    document.write(`<br>${i+1}ª matéria: `)
    for (let j=0; j<qtdProvas ; j++) {
        document.write(`${boletim[i][j]}: `)
    }
}
