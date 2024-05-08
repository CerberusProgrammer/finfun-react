type Props = {
  children: JSX.Element[];
};

export default function BentoLayout({ children }: Props) {
  return (
    <div className="h-screen w-screen grid grid-cols-4 grid-rows-5 sm:grid-rows-3 gap-4 p-4 sm:p-8">
      <div className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-1">
        {children[0]}
      </div>
      <div className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-2">
        {children[1]}
      </div>
      <div className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1">
        {children[2]}
      </div>
      <div className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1">
        {children[3]}
      </div>

      <div className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-1">
        {children[4]}
      </div>

      <div className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1">
        {children[5]}
      </div>
      <div className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1">
        {children[6]}
      </div>
    </div>
  );
}
