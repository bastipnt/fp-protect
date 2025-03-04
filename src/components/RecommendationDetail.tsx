import { useTranslation } from "react-i18next";
import ImgLink from "./ImgLink";

type Props = {
  title: string;
  href: string;
  imgUrl: string;
  description: { [language: string]: string };
  bg?: boolean;
  wide?: boolean;
};

const RecommendationDetail: React.FC<Props> = ({ title, href, imgUrl, bg, description, wide }) => {
  const { i18n } = useTranslation();

  return (
    <div
      className={`grid w-full grid-cols-[100px_1fr] items-center gap-4 sm:grid-cols-[120px_1fr]`}
    >
      <ImgLink href={href} imgUrl={imgUrl} title={title} bg={bg} wide={wide} small />
      <p>{description[i18n.resolvedLanguage || "en"]}</p>
    </div>
  );
};

export default RecommendationDetail;
