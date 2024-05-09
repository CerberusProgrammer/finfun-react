import { Dispatch, useState } from "react";
import ButtonWithModal from "../components/ButtonWithModal";
import { MoneyAction } from "../providers/MoneyActions";

interface Props {
  dispatch: Dispatch<MoneyAction>;
}

export default function AddExpense({ dispatch }: Props) {
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");

  return (
    <ButtonWithModal
      title="New expense"
      onClick={() => {
        dispatch({
          type: "add-expense",
          payload: {
            title: name != "" ? name : "Expense",
            cost: quantity,
            date: `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()}`,
          },
        });
        setName("");
        setQuantity(0);
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Nombre del gasto"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="p-3 border border-green-800 rounded-xl font-bold opacity-70"
      />
      <input
        placeholder="Quantity"
        type="number"
        name=""
        id=""
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
        className="p-3 border border-green-800 rounded-xl font-bold opacity-70"
      />
    </ButtonWithModal>
  );
}
