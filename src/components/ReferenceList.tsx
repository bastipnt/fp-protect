import references from "../references.json";
import { getIndex, ReferenceId } from "../util/referenceHelper";

type Props = {
  referenceIds: ReferenceId[];
};

const ReferenceList: React.FC<Props> = ({ referenceIds }) => {
  return (
    <>
      {referenceIds.length > 0 && (
        <ol className="text-stroke-light mt-4 grid grid-cols-[auto_1fr] text-xs sm:ml-0">
          {referenceIds.map((referenceId) => {
            const { url } = references[referenceId];
            const index = getIndex(referenceId);

            return (
              <li
                key={`${referenceId}`}
                className="col-span-2 grid grid-cols-subgrid flex-row gap-1"
              >
                <small className="mt-0.5">{index}. </small>
                <a
                  className="cursor-pointer underline"
                  href={url}
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  {url}
                </a>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
};

export default ReferenceList;
