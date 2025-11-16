//consegue tipar
let estaChovendo: boolean = false;
estaChovendo = true;

//sem diferença com decimais
let idade: number = 27
let altura: number = 1.75

const nacionalidade: string = 'Brasileira';
const colegas: string[] = ['marcelo', 'Davi brito', 'Sabado']
const países: Array<string> = ['Brasil', 'Russia', 'Alemanhã']

//array de apenas leitura, não possui push() que serve para add novos itens.
const notas: ReadonlyArray<number> = [1,2,3,4,5,6]
//tuplas
const listas: [string, boolean, number] = ['Juan', true, 12]
const listas1: [nome: string, estaEstudando: boolean, idade: number] = ['Juan', true, 12]

//unionType
let idadeDoJuan: number | string = 20
idadeDoJuan = '20 anos';


// tipo any: aceita tudo, muito utlizado quando n sabemos o certo o tipo
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = 'não sei'
dadosDaApi = true;
dadosDaApi = [1, 'a', true];