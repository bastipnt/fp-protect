import { useCallback } from "react";
import { ReferenceName, References } from "../hooks/useReferences";

type Props = {
  referenceName: ReferenceName | ReferenceName[];
  references: References;
};

const Reference: React.FC<Props> = ({ referenceName, references }) => {
  const getNumber = useCallback(() => {
    const getIndex = (n: ReferenceName) => references.findIndex(({ name }) => name === n) + 1;

    if (Array.isArray(referenceName)) {
      const names = referenceName;
      return names.map((refName) => getIndex(refName)).join(",");
    }
    return getIndex(referenceName);
  }, [references, referenceName]);

  return <sup>{getNumber()}</sup>;
};

export default Reference;
