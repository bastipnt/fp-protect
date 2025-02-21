import { References } from "../hooks/useReferences";
import refs from "../references.json";

type Props = {
  references: References;
};

const ReferenceList: React.FC<Props> = ({ references }) => {
  return (
    <ol className="text-stroke-light mt-4 ml-4 cursor-pointer list-decimal text-xs underline sm:ml-0">
      {references.map(({ name, block }) => (
        <li key={`${name}-${block}`}>
          <a href={refs[name].url} target="_blank" referrerPolicy="no-referrer">
            {refs[name].url}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default ReferenceList;
