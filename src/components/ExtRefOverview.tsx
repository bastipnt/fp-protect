import externalReferences from "../externalReferences.json";
import RecommendationDetail from "./RecommendationDetail";

type Props = {
  bg?: boolean;
};

const ExtRefOverview: React.FC<Props> = ({ bg }) => {
  return (
    <ul className="mt-8 grid w-full grid-cols-1 gap-8">
      {externalReferences
        .filter(({ type }) => type === "fingerprintTest")
        .map(({ href, name, id, type, description, ext, wide }) => (
          <li key={id}>
            <RecommendationDetail
              title={name}
              href={href}
              imgUrl={`/img/${type}/${id}${ext}`}
              bg={bg}
              description={description}
              wide={wide}
            />
          </li>
        ))}
    </ul>
  );
};

export default ExtRefOverview;
