export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (money:number): void => {
    if (this.validateStatus()) {
      this.balance += money;
      console.log(`Voce depositou ${money} reais`)
    } else {
      console.log('Depósito inválido.')
    }
  }

  withdraw = (money:number): void => {
    if(this.validateStatus() && this.balance >= money) {
      this.balance -= money
      console.log(`Voce sacou ${money} reais`)
    } else {
      console.log('Saque inválido.')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getValidateStatus = (): boolean => {
    return this.status
  }
}
