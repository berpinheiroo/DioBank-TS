import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (money:number): void => {
    if (this.getValidateStatus()) {
      this.setBalance(this.getBalance() + money)
      console.log(`Voce pegou emprestado ${money} reais`)
    } else {
      console.log('Empréstimo inválido.')
    }
  }
}
