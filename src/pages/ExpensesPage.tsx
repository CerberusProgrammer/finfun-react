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
      </div>
      <div className="p-2">
        {anchoPantalla >= 637 &&
          expenses
            .slice(-4)
            .reverse()
            .map((expense) => (
              <div
                key={`${expense.date}${expense.title}${expense.cost}`}
                className="flex flex-row justify-between"
              >
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">{expense.title}</h1>
                  <h2 className=" opacity-50 text-sm">{expense.date}</h2>
                </div>
                <div>
                  <h1 className="font-bold text-xl">${expense.cost}</h1>
                </div>
              </div>
            ))}
      </div>
    </BentoContainer>
  );
}
