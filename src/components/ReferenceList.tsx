import { References } from "../hooks/useReferences";
import refs from "../references.json";

type Props = {
  references: References;
};

const ReferenceList: React.FC<Props> = ({ references }) => {
  return (
    <>
      {references.length > 0 && (
        <ol className="text-stroke-light mt-4 grid grid-cols-[auto_1fr] text-xs sm:ml-0">
          {references.map(({ name, block, index }) => (
            <li
              key={`${name}-${block}`}
              className="col-span-2 grid grid-cols-subgrid flex-row gap-1"
            >
              <small className="mt-0.5">{index}. </small>
              <a
                className="cursor-pointer underline"
                href={refs[name].url}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {refs[name].url}
              </a>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default ReferenceList;
