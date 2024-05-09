import { useEffect, useReducer } from "react";
import BentoLayout from "./layouts/BentoLayout";
import { loadMoneyState, saveMoneyState } from "./providers/MoneyState";
import moneyReducer from "./providers/MoneyReducer";
import ExpensesPage from "./pages/ExpensesPage";
import AddExpense from "./pages/AddExpense";
import LastExpense from "./pages/LastExpense";

export default function App() {
  const initialState = { expenses: [] };

  const [state, dispatch] = useReducer(
    moneyReducer,
    loadMoneyState() || initialState
  );

  const money: number = state.expenses.reduce(
    (n, expense) => n + expense.cost,
    0
  );

  useEffect(() => {
    saveMoneyState(state);
  }, [state]);
  return (
    <div className="bg-slate-100">
      <BentoLayout>
        <p>asd</p>
        <ExpensesPage money={money} expenses={state.expenses} />
        <LastExpense expense={state.expenses[state.expenses.length - 1]} />
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <AddExpense dispatch={dispatch} />
      </BentoLayout>
    </div>
  );
}
