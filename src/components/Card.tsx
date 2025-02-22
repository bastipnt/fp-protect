import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  result?: string;
  danger?: boolean;
  bg?: boolean;
  className?: string;
};

const Card: React.FC<Props> = ({ children, title, danger, result, bg, className }) => {
  return (
    <div
      className={`rounded-2xl border-2 border-dashed p-4 ${danger ? "bg-danger-lighter" : bg ? "bg-primary-lighter" : "bg-surface-darker-half"} ${className}`}
    >
      {title && <h2 className="text-xl sm:text-2xl">{title}</h2>}
      <div className="flex flex-col gap-2">
        {children}
        {result && <p className="text-center text-xl">{result}</p>}
      </div>
    </div>
  );
};

export default Card;
