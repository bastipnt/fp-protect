import { ReactNode } from "react";
import { ReferenceId } from "../util/referenceHelper";
import ReferenceList from "./ReferenceList";

type Props = {
  children: ReactNode;
  bg?: boolean;
  referenceIds?: ReferenceId[];
  id?: string;
};

const PageSection: React.FC<Props> = ({ children, bg, referenceIds, id }) => {
  return (
    <section
      id={id}
      className={`${bg ? "bg-primary border-y-4 border-dashed" : ""} flex w-screen flex-col items-center py-8 sm:py-12`}
    >
      <div className="flex w-150 max-w-screen flex-col gap-4 px-4 sm:px-8">
        {children}
        {referenceIds && referenceIds.length > 0 && <ReferenceList referenceIds={referenceIds} />}
      </div>
    </section>
  );
};

export default PageSection;
