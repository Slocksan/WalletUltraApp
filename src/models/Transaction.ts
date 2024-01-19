import { IAccount } from "./Account"
import { ICategory } from "./Category"
import { ITag } from "./Tag"

export interface ITransaction {
  description: string
  dateTime: Date
  value: number
  source?: IAccount
  target?: IAccount
  category?: ICategory
  transactionType: TransactionType
  tags: ITag[]
}

export enum TransactionType {
  Transfer,
  Expense,
  Income
}