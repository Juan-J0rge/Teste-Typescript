class ContaBanc {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta:number) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    setDepositar(valor: number) {
        this.saldo += valor;
    }
}

class UsuarioDaConta extends ContaBanc {
    setDepositar(valor: number): void {
        this.saldo = valor * 2;
    }
}