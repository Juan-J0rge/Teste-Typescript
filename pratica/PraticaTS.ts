/**
 * Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação
 *  que deverá receber como argumentos dois números e retornar a multiplicação deles,
 *  e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
 */

function PraticaMulti(param1: number,param2: number) {
    return param1 * param2;
}

const recebeNome = (nome: string) => {
    console.log(`Ola ${nome}, tudo bem?`)
}


console.log('Resultado da multiplicação: ' , PraticaMulti(2, 3));
recebeNome('Túlio');