class Conta {
    numeroDaConta: number;
    saldo: number = 0;
    constructor(numerDaConta: number) {
        this.numeroDaConta = numerDaConta;
    }
}

class contaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor
    }
}

interface ITransferir {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number
}

class ContaCOrrente extends Conta implements ITransferir {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += valor;
        return true;
    }
    taxaTransferencia: number = 0;

}