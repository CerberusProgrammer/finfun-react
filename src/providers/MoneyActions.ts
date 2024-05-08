export type MoneyAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "add-money"; payload: number }
  | { type: "reduce-money"; payload: number };
