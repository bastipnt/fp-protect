import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  result: string;
  danger?: boolean;
};

const TestCard: React.FC<Props> = ({ children, title, danger, result }) => {
  return (
    <div className="border-stroke bg-surface min-w-80 border-4">
      <h2 className="bg-surface-darker border-b-4 px-2 text-3xl">{title}</h2>
      <div className="flex flex-col gap-2 p-2">
        {children}
        <p className={`text-2xl ${danger ? "text-danger" : ""}`}>{result}</p>
      </div>
    </div>
  );
};

export default TestCard;
