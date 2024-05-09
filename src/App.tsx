import { useEffect, useReducer } from "react";
import BentoLayout from "./layouts/BentoLayout";
import { loadMoneyState, saveMoneyState } from "./providers/MoneyState";
import moneyReducer from "./providers/MoneyReducer";
import ExpensesPage from "./pages/ExpensesPage";
import AddExpense from "./pages/AddExpense";
import LastExpense from "./pages/LastExpense";
import BentoContainer from "./components/BentoContainer";
import { MdCreditCard } from "react-icons/md";

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
        <BentoContainer children={null} />
        <ExpensesPage money={money} expenses={state.expenses} />
        <LastExpense
          expense={
            state.expenses.length === 0
              ? null
              : state.expenses[state.expenses.length - 1]
          }
        />

        <BentoContainer children={null} />
        <BentoContainer>
          <div className="flex flex-row justify-between h-full">
            <div className="flex flex-col">
              <MdCreditCard className="opacity-30" />

              <h3 className="text-lg opacity-30 font-bold">Bancomer</h3>
              <h1 className="text-4xl font-bold opacity-70">$54000</h1>
              <h3 className="text-md opacity-30 font-bold">**** 4674</h3>
            </div>
            <div className="flex flex-row space-x-4">
              <button className=" rounded-xl bg-green-100 px-8 py-4">
                <p className="text-xl font-extrabold opacity-70">Add card</p>
              </button>
              <button className=" rounded-xl bg-green-100 px-8 py-4">
                <p className="text-xl font-extrabold opacity-70">Add card</p>
              </button>
            </div>
          </div>
        </BentoContainer>
        <BentoContainer children={null} />
        <AddExpense dispatch={dispatch} />
      </BentoLayout>
    </div>
  );
}
