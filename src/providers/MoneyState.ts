import { Expense } from "../models/Expense";

export interface MoneyState {
  expenses: Expense[];
}

export function loadMoneyState(): MoneyState {
  try {
    const serializedState = localStorage.getItem("money-state");
    if (serializedState === null) {
      return { expenses: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { expenses: [] };
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
