import { ChangeEvent, Dispatch, useState } from "react";
import ButtonWithModal from "../components/ButtonWithModal";
import { MoneyAction } from "../providers/MoneyActions";

interface Props {
  dispatch: Dispatch<MoneyAction>;
}

export default function AddExpense({ dispatch }: Props) {
  const [quantity, setQuantity] = useState(0);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const x: number = Number(event.target.value);
    setQuantity(x);
    console.log;
  };

  return (
    <ButtonWithModal
      title="New expense"
      onClick={() => {
        dispatch({
          type: "add-expense",
          payload: {
            title: "New expense",
            cost: quantity,
          },
        });
        setQuantity(0);
      }}
    >
      <input
        placeholder="Quantity"
        type="number"
        name=""
        id=""
        value={quantity}
        onChange={onChange}
        className="p-3 border border-green-800 rounded-xl font-bold opacity-70"
      />
    </ButtonWithModal>
  );
}
