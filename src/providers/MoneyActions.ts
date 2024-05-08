import { Expense } from "../models/Expense";

export type MoneyAction = { type: "add-expense"; payload: Expense };
