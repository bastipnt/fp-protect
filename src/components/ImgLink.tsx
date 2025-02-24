type Props = {
  title: string;
  href: string;
  imgUrl: string;
  bg?: boolean;
  small?: boolean;
  wide?: boolean;
};

const ImgLink: React.FC<Props> = ({ title, href, imgUrl, bg, small, wide }) => {
  return (
    <a
      className={`${bg ? "bg-primary-lighter" : ""} flex cursor-pointer flex-col items-center justify-center gap-2 self-start rounded-2xl border-2 border-dashed p-4 align-middle`}
      href={href}
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <img className={`${wide ? "w-full" : "w-8 sm:w-12"}`} src={imgUrl} alt={title} />
      <p className={`text-center ${small ? "text-sm" : "text-lg sm:text-2xl"}`}>{title}</p>
    </a>
  );
};

export default ImgLink;
