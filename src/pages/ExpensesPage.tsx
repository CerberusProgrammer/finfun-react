import BentoContainer from "../components/BentoContainer";

type Props = {
  money: number;
};

export default function ExpensesPage({ money }: Props) {
  return (
    <BentoContainer>
      <div className=" bg-green-100 w-full h-full sm:h-1/2 rounded-2xl p-4 flex flex-col justify-end">
        <p className=" text-black opacity-40 font-bold">Expenses</p>
        <p className=" text-black opacity-70 text-4xl font-bold">${money}</p>
      </div>
    </BentoContainer>
  );
}
