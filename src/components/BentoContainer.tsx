type Props = {
  children: JSX.Element | JSX.Element[] | null;
};

export default function BentoContainer({ children }: Props) {
  return (
    <div className="w-full h-full px-4 py-4 rounded-3xl shadow-sm bg-white">
      {children}
    </div>
  );
}
