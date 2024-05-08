import { useReducer } from "react";
import MoneyContext from "./MoneyContext";
import moneyReducer from "./MoneyReducer";
import { loadMoneyState } from "./MoneyState";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function MoneyProvider({ children }: Props) {
  const [state, dispatch] = useReducer(moneyReducer, loadMoneyState());

  return (
    <MoneyContext.Provider value={{ state, dispatch }}>
      {children}
    </MoneyContext.Provider>
  );
}
