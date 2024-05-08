import { useEffect, useReducer } from "react";
import BentoLayout from "./layouts/BentoLayout";
import { loadMoneyState, saveMoneyState } from "./providers/MoneyState";
import moneyReducer from "./providers/MoneyReducer";

export default function App() {
  const [state, dispatch] = useReducer(moneyReducer, loadMoneyState());

  useEffect(() => {
    saveMoneyState(state);
  }, [state]);
  return (
    <div className="bg-slate-100">
      <BentoLayout>
        <p>asd</p>
        <div className="w-full h-full px-3 py-3 rounded-3xl shadow-sm bg-white">
          <div className=" bg-green-100 w-full h-full sm:h-1/2 rounded-2xl p-4 flex flex-col justify-end">
            <p className=" text-black opacity-40 font-bold">Dinero</p>
            <p className=" text-black opacity-70 text-4xl font-bold">
              ${state.total}
            </p>
          </div>
        </div>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <p>asd</p>
        <button
          className="w-full h-full px-3 py-3 rounded-3xl shadow-sm bg-green-200"
          onClick={() => dispatch({ type: "add-money", payload: 1 })}
        >
          <p className="font-bold text-xl opacity-70">Agregar</p>
        </button>
      </BentoLayout>
    </div>
  );
}
