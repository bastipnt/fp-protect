type Props = {
  title: string;
  href: string;
  imgUrl: string;
};

const ImgLink: React.FC<Props> = ({ title, href, imgUrl }) => {
  return (
    <a
      className="bg-primary-lighter flex h-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-4 align-middle"
      href={href}
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <img className="w-8 sm:w-12" src={imgUrl} alt={title} />
      <p className="text-center text-lg sm:text-2xl">{title}</p>
    </a>
  );
};

export default ImgLink;
