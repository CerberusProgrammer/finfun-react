// context.ts
import { createContext, Dispatch } from "react";
import { MoneyState } from "./MoneyState";
import { MoneyAction } from "./MoneyActions";

interface MoneyContextProps {
  state: MoneyState;
  dispatch: Dispatch<MoneyAction>;
}

const MoneyContext = createContext<MoneyContextProps>({
  state: { expenses: [] },
  dispatch: () => undefined,
});

export default MoneyContext;
