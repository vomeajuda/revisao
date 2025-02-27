import linha from './moduloA.js';
import fatorial from './moduloB.js';
import trocarValores from './moduloC.js';
import alunos from './moduloD.js';

console.log('MODULOS BUNMBUMN');
console.log(linha(80));
console.log(`Fatorial = ${fatorial(5)}`);
console.log(linha(80));
console.log(`Trocados - ${trocarValores(100, 200)}`);
console.log(linha(80));
console.log("Amostradinhos:");
alunos().map(({nome}) => console.log(nome));
console.log(linha(80));
alunos().filter(({situacao}) => situacao == "falecido").map(({nome}) => console.log(nome));