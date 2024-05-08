import { MoneyAction } from "./MoneyActions";
import { MoneyState } from "./MoneyState";

export default function moneyReducer(
  state: MoneyState,
  action: MoneyAction
): MoneyState {
  switch (action.type) {
    case "increment":
      return { ...state, total: state.total + 1 };
    case "decrement":
      return { ...state, total: state.total - 1 };
    case "add-money":
      return { ...state, total: state.total + action.payload };
    case "reduce-money":
      return { ...state, total: state.total - action.payload };
    case "reset":
      return { ...state, total: 0 };
    default:
      throw new Error();
  }
}
