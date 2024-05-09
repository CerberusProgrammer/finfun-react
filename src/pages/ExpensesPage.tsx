import { useEffect, useState } from "react";
import BentoContainer from "../components/BentoContainer";
import { Expense } from "../models/Expense";

type Props = {
  money: number;
  expenses: Expense[];
};

export default function ExpensesPage({ expenses, money }: Props) {
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setAnchoPantalla(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BentoContainer>
      <div className=" bg-green-100 w-full h-full sm:h-1/2 rounded-2xl p-4 flex flex-col justify-end">
        <p className=" text-black opacity-40 font-bold">Expenses</p>
        <p className=" text-black opacity-70 text-4xl font-bold">${money}</p>

        {anchoPantalla >= 637 &&
          expenses
            .slice(-5)
            .reverse()
            .map((expense) => <p key={expense.cost}>{expense.cost}</p>)}
      </div>
    </BentoContainer>
  );
}
