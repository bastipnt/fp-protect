import { useCallback, useEffect, type ReactNode } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import NavLink from "./components/NavLink";
import { scrollTopOrHash } from "./util/windowHelper";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [location] = useLocation();
  const [hashLocation] = useHashLocation();

  const { i18n } = useTranslation();

  useEffect(() => {
    const hash = hashLocation.substring(1);

    scrollTopOrHash(hash);
  }, [location, hashLocation]);

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(i18n.resolvedLanguage === "de" ? "en" : "de");
    // needs to be done because Trans component will not be effected otherwise (no easy way)
    window.location.reload();
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <nav
        id="page-header"
        className="bg-surface font-heading text-default sm:text-md justify-left fixed top-0 left-0 z-50 grid w-screen grid-cols-[repeat(3,1fr)] flex-row gap-4 p-2 py-3 align-middle sm:flex sm:gap-10 sm:px-8"
      >
        <NavLink to="/">
          <Trans i18nKey="nav.web-tracking">Web Tracking</Trans>
        </NavLink>
        <NavLink to="/mitigation-strategies">
          <Trans i18nKey="nav.protect">Protect yourself</Trans>
        </NavLink>
        <NavLink to="/test">
          <Trans i18nKey="nav.test">Test your browser</Trans>
        </NavLink>
        <div className="col-span-3 flex flex-row items-center justify-end gap-4 px-2 text-sm sm:ml-auto sm:text-base md:gap-8">
          <a
            href="https://tracking-survey.bastipnt.de/?ref=test"
            target="_blank"
            className="flex flex-col justify-center text-center"
          >
            <Trans i18nKey="nav.survey">Survey</Trans>
          </a>
          <button
            className="cursor-pointer flex-col justify-center text-center whitespace-nowrap"
            onClick={toggleLanguage}
          >
            <span
              className={`${i18n.resolvedLanguage === "en" ? "text-default" : "text-stroke-light"}`}
            >
              EN
            </span>
            |
            <span
              className={`${i18n.resolvedLanguage === "de" ? "text-default" : "text-stroke-light"}`}
            >
              DE
            </span>
          </button>
        </div>
      </nav>

      <main className="box-border flex w-screen flex-col items-center gap-8 pt-28 sm:pt-12">
        {children}
      </main>

      <footer className="text-stroke-light flex w-screen flex-col gap-4 p-4 text-sm sm:p-8 sm:text-lg">
        <ul className="flex flex-row justify-end gap-2">
          <li>
            <Trans i18nKey="foot.contact">Contact:</Trans>
          </li>
          <li>
            <a className="cursor-pointer" href="mailto:gt46nevl0@mozmail.com">
              Email
            </a>
          </li>
          <li>|</li>
          <li>
            <a
              className="cursor-pointer"
              href="https://github.com/bastipnt/fp-protect"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="text-center text-xs sm:text-right">
          <Trans i18nKey="foot.content">
            This website's content is based on information available as of February 2025.
          </Trans>
        </p>
      </footer>
    </>
  );
};

export default Layout;
