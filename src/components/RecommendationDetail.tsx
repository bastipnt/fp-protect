import ImgLink from "./ImgLink";

type Props = {
  title: string;
  href: string;
  imgUrl: string;
  description: string;
  bg?: boolean;
};

const RecommendationDetail: React.FC<Props> = ({ title, href, imgUrl, bg, description }) => {
  return (
    <div
      className={`grid w-full grid-cols-[100px_1fr] items-center gap-4 sm:grid-cols-[120px_1fr]`}
    >
      <ImgLink href={href} imgUrl={imgUrl} title={title} bg={bg} small />
      <p>{description}</p>
    </div>
  );
};

export default RecommendationDetail;
