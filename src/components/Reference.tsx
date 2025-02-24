import { useCallback } from "react";
import { getIndex, type ReferenceId } from "../util/referenceHelper";

type Props = {
  referenceId: ReferenceId | ReferenceId[];
};

const Reference: React.FC<Props> = ({ referenceId }) => {
  const getNumber = useCallback(() => {
    if (Array.isArray(referenceId)) {
      const ids = referenceId;
      return ids.map((id) => getIndex(id)).join(",");
    }

    return getIndex(referenceId);
  }, [referenceId]);

  return <sup>{getNumber()}</sup>;
};

export default Reference;
