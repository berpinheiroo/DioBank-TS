import { DioAccount } from "./DioAccount";

export class ExclusiveAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (money: number): void => {
        if(this.getValidateStatus()) {
            const currentBalance = this.getBalance();
            this.setBalance(currentBalance + money + 10);
            console.log(`Você depositou ${money} reais`);
        } else {
            console.log('Depósito inválido.');
        }
    }
}