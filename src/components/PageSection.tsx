import { ReactNode } from "react";
import { References } from "../hooks/useReferences";
import ReferenceList from "./ReferenceList";

type Props = {
  children: ReactNode;
  bg?: boolean;
  references?: References;
  id?: string;
};

const PageSection: React.FC<Props> = ({ children, bg, references, id }) => {
  return (
    <section
      id={id}
      className={`${bg ? "bg-primary border-y-4 border-dashed" : ""} flex w-screen flex-col items-center py-8 sm:py-12`}
    >
      <div className="flex w-150 max-w-screen flex-col gap-4 px-4 sm:px-8">
        {children}
        {references && references.length > 0 && <ReferenceList references={references} />}
      </div>
    </section>
  );
};

export default PageSection;
