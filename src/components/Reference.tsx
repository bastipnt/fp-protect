import { ReferenceName, References } from "../hooks/useReferences";

type Props = {
  referenceName: ReferenceName;
  references: References;
};

const Reference: React.FC<Props> = ({ referenceName, references }) => {
  return <sup>{references.findIndex(({ name }) => name === referenceName) + 1}</sup>;
};

export default Reference;
