import BentoContainer from "../components/BentoContainer";
import { Expense } from "../models/Expense";

type Props = {
  expense: Expense | null;
};

export default function LastExpense({ expense }: Props) {
  return (
    <BentoContainer>
      <p className=" text-black opacity-40 font-bold">Last expense</p>
      <p className=" text-black opacity-70 text-4xl font-bold justify-center">
        {expense == null ? (
          <p>Empty</p>
        ) : (
          <div>
            <h1 className="">{expense?.cost}</h1>
            <h3 className="text-lg opacity-40">{expense.title}</h3>
            <h3 className=" text-sm opacity-40">{expense.date}</h3>
          </div>
        )}
      </p>
    </BentoContainer>
  );
}
