import { ReactNode, Ref, useCallback, useContext, useEffect, useState } from "react";
import { ResponsivenessContext } from "../providers/responsivenessProvider";
import PhoneInfoOverlay from "./PhoneInfoOverlay";

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
  titleRef?: Ref<HTMLHeadingElement>;
  responsive?: boolean;
};

const Card: React.FC<Props> = ({ children, title, titleRef, className, responsive = true }) => {
  const { isMobileSize } = useContext(ResponsivenessContext);
  const [show, setShow] = useState(false);

  const applyMobile = useCallback(() => responsive && isMobileSize, [responsive, isMobileSize]);

  const handleClick = useCallback(() => {
    if (!isMobileSize) return setShow(false);
    setShow((showing) => !showing);
  }, [isMobileSize]);

  useEffect(() => {
    if (!isMobileSize) setShow(false);
  }, [isMobileSize]);

  return (
    <div className={`border-stroke bg-surface border-4 ${className}`}>
      <h2
        className={`bg-surface-darker ${applyMobile() ? "cursor-pointer" : "border-b-4"} p-2 text-xl sm:py-0 sm:text-3xl`}
        ref={titleRef}
        onClick={handleClick}
      >
        {title}
      </h2>
      {applyMobile() ? (
        show && (
          <PhoneInfoOverlay closeCallback={handleClick} title={title}>
            {children}
          </PhoneInfoOverlay>
        )
      ) : (
        <div className="flex flex-col gap-2 p-2">{children}</div>
      )}
    </div>
  );
};

export default Card;
