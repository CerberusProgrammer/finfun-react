type Props = { children: JSX.Element | JSX.Element[]; color?: string };

export default function BentoComponent({ children, color = "white" }: Props) {
  let backgroundColor = "bg-white";
  let colorFont = "";

  if (color != "white") {
    backgroundColor = `bg-${color}-700`;
    colorFont = "text-white";
  }

  return (
    <div
      className={`${backgroundColor} w-full h-full px-4 py-3 rounded-3xl shadow-sm ${colorFont}`}
    >
      {children}
    </div>
  );
}
