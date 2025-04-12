import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ExclusiveAccount } from './class/ExclusiveAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Bernardo', 10)
// console.log(peopleAccount)
// peopleAccount.deposit(10)
// peopleAccount.getBalance()
// peopleAccount.withdraw(25)
// peopleAccount.getBalance()

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.getLoan(1000)
// companyAccount.getBalance()
// companyAccount.getLoan(500)
// companyAccount.getBalance()

const exclusiveAccount: ExclusiveAccount = new ExclusiveAccount('DIO', 30)
exclusiveAccount.deposit(1000)
exclusiveAccount.getBalance()
