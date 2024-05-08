import { useEffect, useReducer } from "react";
import BentoLayout from "./layouts/BentoLayout";
import { loadMoneyState, saveMoneyState } from "./providers/MoneyState";
import moneyReducer from "./providers/MoneyReducer";
import ExpensesPage from "./pages/ExpensesPage";
import ButtonPage from "./pages/ButtonPage";

export default function App() {
  const [state, dispatch] = useReducer(moneyReducer, loadMoneyState());

  useEffect(() => {
    saveMoneyState(state);
  }, [state]);
  return (
    <div className="bg-slate-100">
      <BentoLayout>
        <p>asd</p>
        <ExpensesPage money={state.total} />
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <ButtonPage
          title="Add"
          onClick={() => dispatch({ type: "add-money", payload: 1 })}
        />
      </BentoLayout>
    </div>
  );
}
