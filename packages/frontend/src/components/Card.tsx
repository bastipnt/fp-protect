import { ReactNode, Ref } from "react";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
  titleRef?: Ref<HTMLHeadingElement>;
};

const Card: React.FC<Props> = ({ children, title, titleRef, className }) => {
  return (
    <div className={`border-stroke bg-surface border-4 ${className}`}>
      <h2 className="bg-surface-darker border-b-4 px-2 text-3xl" ref={titleRef}>
        {title}
      </h2>
      <div className="flex flex-col gap-2 p-2">{children}</div>
    </div>
  );
};

export default Card;
