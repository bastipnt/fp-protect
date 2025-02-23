import { useCallback, useContext } from "react";
import { ResponsivenessContext } from "../providers/responsivenessProvider";
import recommendations from "../recommendations.json";
import Card from "./Card";
import ImgLink from "./ImgLink";
import RecommendationDetail from "./RecommendationDetail";

export type Area = keyof typeof recommendations | "best";

type Props = {
  area: Area;
  bg?: boolean;
  preview?: boolean;
};

const RecommendationOverview: React.FC<Props> = ({ area, bg, preview }) => {
  const { os, isMobile, browser } = useContext(ResponsivenessContext);

  const getRecommendationsForArea = useCallback(
    (currArea: Exclude<Area, "best">) => {
      let device = "desktop";

      if (isMobile) {
        if (os === "iOS") device = "iOS";
        else device = "android";
      }

      const deviceSpecificRecommendations = recommendations[currArea].filter(({ devices }) =>
        devices.includes(device),
      );

      const browserSpecificRecommendations = deviceSpecificRecommendations.filter(
        (recommendation) => {
          if (!("links" in recommendation)) return true;
          if (!browser) return true;

          return Object.keys(recommendation.links as { [key: string]: string }).some(
            (browserKey) => browser.toLowerCase().search(browserKey) !== -1,
          );
        },
      );

      return browserSpecificRecommendations;
    },
    [area, os, isMobile, browser],
  );

  const getRecommendationList = useCallback(() => {
    if (area === "best") {
      return Object.keys(recommendations)
        .map((currArea) => {
          const areaRecommendations = getRecommendationsForArea(currArea as Exclude<Area, "best">);

          return areaRecommendations.reduce((topRecommendation, currRecommendation) => {
            if (topRecommendation?.recommendationWeight > currRecommendation?.recommendationWeight)
              return currRecommendation;

            return topRecommendation;
          }, areaRecommendations[0] || {});
        })
        .filter((recommendation) => recommendation?.id);
    }

    return getRecommendationsForArea(area);
  }, [area, getRecommendationsForArea]);

  return (
    <ul
      className={`mt-8 grid w-full ${preview ? "grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4" : "grid-cols-1 gap-8"}`}
    >
      {getRecommendationList().map(({ href, name, id, type, ext, description }) => (
        <li key={id}>
          {preview ? (
            <ImgLink title={name} href={href} imgUrl={`/img/${type}/${id}${ext}`} bg={bg} />
          ) : (
            <RecommendationDetail
              title={name}
              href={href}
              imgUrl={`/img/${type}/${id}${ext}`}
              bg={bg}
              description={description}
            />
          )}
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
