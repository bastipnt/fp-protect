import { ReactNode, Ref } from "react";

type Props = {
  children: ReactNode;
  title: string;
  titleRef: Ref<HTMLHeadingElement>;
};

const Card: React.FC<Props> = ({ children, title, titleRef }) => {
  return (
    <div className="border-stroke w-[80%] border-4">
      <h2 className="bg-surface-darker border-b-4 px-2 text-3xl" ref={titleRef}>
        {title}
      </h2>
      <div className="bg-surface p-2">{children}</div>
    </div>
  );
};

export default Card;
