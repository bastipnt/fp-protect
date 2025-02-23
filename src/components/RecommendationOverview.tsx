import { useCallback, useContext } from "react";
import { ResponsivenessContext } from "../providers/responsivenessProvider";
import recommendations from "../recommendations.json";
import Card from "./Card";
import ImgLink from "./ImgLink";

export type Area = keyof typeof recommendations | "best";

type Props = {
  area: Area;
  bg?: boolean;
};

const RecommendationOverview: React.FC<Props> = ({ area, bg }) => {
  const { os, isMobile } = useContext(ResponsivenessContext);

  const getRecommendationList = useCallback(() => {
    let device = "desktop";

    if (isMobile) {
      if (os === "iOS") device = "iOS";
      else device = "android";
    }

    if (area === "best") {
      return Object.values(recommendations).reduce(
        (selectedRecommendations, areaRecommendations) => {
          const recommendation = areaRecommendations.find(({ topRecommendation }) =>
            topRecommendation.includes(device),
          );
          if (!recommendation) return selectedRecommendations;

          return [...selectedRecommendations, recommendation];
        },
        [],
      );
    }

    return recommendations[area].filter(({ devices }) => devices.includes(device));
  }, [area, os, isMobile]);

  return (
    <ul className="mt-8 grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {getRecommendationList().map(({ href, name, id, type, ext }) => (
        <li key={id}>
          <ImgLink title={name} href={href} imgUrl={`/img/${type}/${id}${ext}`} bg={bg} />
        </li>
      ))}
      {getRecommendationList().length === 0 && (
        <li>
          <Card bg={bg}>
            <p>No recommendations found for your device.</p>
          </Card>
        </li>
      )}
    </ul>
  );
};

export default RecommendationOverview;
