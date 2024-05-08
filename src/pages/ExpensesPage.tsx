type Props = {
  money: number;
};

export default function ExpensesPage({ money }: Props) {
  return (
    <div className="w-full h-full px-3 py-3 rounded-3xl shadow-sm bg-white">
      <div className=" bg-green-100 w-full h-full sm:h-1/2 rounded-2xl p-4 flex flex-col justify-end">
        <p className=" text-black opacity-40 font-bold">Expenses</p>
        <p className=" text-black opacity-70 text-4xl font-bold">${money}</p>
      </div>
    </div>
  );
}
