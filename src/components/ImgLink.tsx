type Props = {
  title: string;
  href: string;
  imgUrl: string;
  type?: string;
  bg?: boolean;
  small?: boolean;
  wide?: boolean;
};

const typeMap = {
  browser: "Browser",
  adBlocker: "Ad Blocker",
  vpn: "VPN",
  searchEngine: "Search Engine",
  fingerprintProtection: "Fingerprint Protection",
};

const ImgLink: React.FC<Props> = ({ title, href, imgUrl, bg, small, wide, type }) => {
  return (
    <a
      className={`${bg ? "bg-primary-lighter" : ""} flex cursor-pointer flex-col items-center justify-center gap-2 self-start rounded-2xl border-2 border-dashed ${type ? "pt-0 pb-4" : "p-4"} align-middle`}
      href={href}
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <span className="text-stroke-light self-start px-2">
        {typeMap[type as keyof typeof typeMap]}
      </span>
      <img className={`${wide ? "w-full" : "w-8 sm:w-12"}`} src={imgUrl} alt={title} />
      <p className={`text-center ${small ? "text-sm" : "text-lg sm:text-2xl"}`}>{title}</p>
    </a>
  );
};

export default ImgLink;
