import { Expense } from "../models/Expense";

export interface MoneyState {
  total: number;
  expense: Expense[];
}

export function loadMoneyState(): MoneyState {
  try {
    const serializedState = localStorage.getItem("money-state");
    if (serializedState === null) {
      return { total: 0, expense: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { total: 0, expense: [] };
  }
}

export function saveMoneyState(state: MoneyState): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("money-state", serializedState);
  } catch {
    throw new Error("Error saving state");
  }
}
