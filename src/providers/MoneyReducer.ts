import { MoneyAction } from "./MoneyActions";
import { MoneyState } from "./MoneyState";

export default function moneyReducer(
  state: MoneyState,
  action: MoneyAction
): MoneyState {
  switch (action.type) {
    case "add-expense":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      throw new Error();
  }
}
