import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  closeCallback: () => void;
};

const PhoneInfoOverlay: React.FC<Props> = ({ children, title, closeCallback }) => {
  return (
    <div className="bg-surface fixed top-(--phone-browser-top) left-(--phone-browser-left) flex h-(--phone-browser-h) w-(--phone-browser-w) flex-col gap-4 overflow-scroll p-2 py-4">
      <h2 className="text-2xl">{title}</h2>
      {children}
      <button
        className="font-heading bg-surface-darker my-4 cursor-pointer self-end border-4 p-2 text-lg"
        onClick={closeCallback}
      >
        Close
      </button>
    </div>
  );
};

export default PhoneInfoOverlay;
