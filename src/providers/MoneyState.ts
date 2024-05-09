import { Card } from "../models/Card";
import { Expense } from "../models/Expense";

export interface MoneyState {
  expenses: Expense[];
  cards: Card[];
}

export function loadMoneyState(): MoneyState {
  try {
    const serializedState = localStorage.getItem("money-state");
    if (serializedState === null) {
      return { expenses: [], cards: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { expenses: [], cards: [] };
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
