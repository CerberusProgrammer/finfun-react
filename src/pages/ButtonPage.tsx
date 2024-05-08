type Props = {
  title: string;
  onClick: () => void;
};

export default function ButtonPage({ title, onClick }: Props) {
  return (
    <button
      className="w-full h-full px-3 py-3 rounded-3xl shadow-sm bg-green-200"
      onClick={onClick}
    >
      <p className="font-bold text-xl opacity-70">{title}</p>
    </button>
  );
}
