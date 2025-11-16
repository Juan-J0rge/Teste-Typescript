function calculaArea(base: number, altura: number) {
    return base * altura
}

const calculaArea2 = (base: number, altura: number) => base * altura;

//como podemos deixar explicito o tipo com rest
function arrayDeNumeros(...numeros: number[]) : void {
    console.log(numeros);
}

//retornando 2 valores diferentes com unionType

function teste(): string | number {
    if(10 > 5) {
        return '10 maior q 5'
    }else {
        return 5
    }
}