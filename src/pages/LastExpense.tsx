import BentoContainer from "../components/BentoContainer";
import { Expense } from "../models/Expense";

type Props = {
  expense: Expense;
};

export default function LastExpense({ expense }: Props) {
  return (
    <BentoContainer>
      <p className=" text-black opacity-40 font-bold">Last expense</p>
      <p className=" text-black opacity-70 text-4xl font-bold">
        {expense.cost}
      </p>
    </BentoContainer>
  );
}
