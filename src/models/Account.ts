import { ICurrency } from "./Currency";

export interface IAccount {
  name: string,
  balance: number,
  currency: ICurrency
}