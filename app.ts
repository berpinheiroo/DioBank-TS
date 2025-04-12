import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Bernardo', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.getBalance()
peopleAccount.withdraw(25)
peopleAccount.getBalance()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount)