import { Link } from "wouter";
import ImgLink from "../components/ImgLink";
import PageSection from "../components/PageSection";

const Mitigation: React.FC = () => {
  return (
    <>
      <PageSection>
        <p>
          <span className="font-heading text-xl">Mitigating web tracking</span> doesn't need to be
          that hard.
        </p>
        <p>This guide is designed to show you some tools and tricks to gain more online privacy!</p>
        <p>
          From choosing the right browser, using a privacy focused search engine, to installing ad
          blocking extensions, there are many things that can be done.
        </p>
      </PageSection>

      <PageSection bg>
        <p>
          <span className="font-heading text-xl">tldr;</span> these are my top recommendations:
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          <li>
            <ImgLink
              title="LibreWolff Browser"
              href="https://librewolf.net/"
              imgUrl="/img/browsers/librewolff.png"
            />
          </li>
          <li>
            <ImgLink
              title="uBlock Origin Ad Blocker"
              href="https://ublockorigin.com/"
              imgUrl="/img/adblockers/ublockorigin.png"
            />
          </li>
          <li>
            <ImgLink
              title="Mullvad VPN"
              href="https://mullvad.net/"
              imgUrl="/img/vpns/mullvad-vpn.svg"
            />
          </li>
          <li>
            <ImgLink
              title="DuckDuckGo Search Engine"
              href="https://duckduckgo.com/"
              imgUrl="/img/searchEngines/duckduckgo.svg"
            />
          </li>
          <li className="sm:col-span-2">
            <ImgLink
              title="CanvasBlocker Extension"
              href="https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/"
              imgUrl="/img/other/canvas-blocker.png"
            />
          </li>
        </ul>
      </PageSection>

      <PageSection>
        <p>
          <span className="font-heading text-xl">Browsers</span> can make a huge difference when it
          comes to tracking! Did you know that?
        </p>
        <p>Not all browsers treat your privacy with the same respect.</p>
        <p>
          Most people are using the Google Chrome Browser, but it is actually the worst browser you
          can use, when you don't want to be tracked.
        </p>
        <p>
          The reason for that is, that Google makes billions of dollars each year with targeted
          advertisement. So it is in ther interes to track you even more.
        </p>
        <p>Luckily there are other browsers, that are focued on your privacy.</p>
        <p>My recommendations are the following:</p>
        <div className="flex flex-row justify-center gap-8 p-4 sm:items-end sm:gap-12">
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://www.mozilla.org/en-US/firefox/new/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-8 sm:w-12" src="/img/browsers/firefox.png" alt="firefox" />
            <p className="text-lg sm:text-2xl">Firefox</p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://librewolf.net/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-8 sm:w-12" src="/img/browsers/librewolff.png" alt="librewolff" />
            <p className="text-lg sm:text-2xl">LibreWolff</p>
          </a>
        </div>
      </PageSection>

      <PageSection bg>
        <p>Are you already using an Ad Blocker?</p>
        <p>Most ad blockers not only block ads, but also web tracking!</p>
        <p>
          This works with so called filter lists. These include many urls of known advertisers and
          trackers.
        </p>
        <p>Urls from this list are prevented from loading.</p>
        <p>
          There are a lot of different ad blocker extensions. Some are free and some cost money.
        </p>
        <p>Luckily the best ones are for free:</p>
        <div className="flex flex-row justify-center gap-8 p-4 sm:items-end sm:gap-12">
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://ublockorigin.com/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img
              className="w-8 sm:w-12"
              src="/img/adblockers/ublockorigin.png"
              alt="ublockorigin"
            />
            <p className="text-lg sm:text-2xl">
              uBlock Origin <small className="hidden sm:inline">*best</small>
            </p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://privacybadger.org/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img
              className="w-12 sm:w-18"
              src="/img/adblockers/privacy-badger.png"
              alt="privacy-badger"
            />
            <p className="text-lg sm:text-2xl">Privacy Badger</p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://www.ghostery.com/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-8 sm:w-12" src="/img/adblockers/ghostery.png" alt="ghostery" />
            <p className="text-lg sm:text-2xl">Ghostery</p>
          </a>
        </div>
      </PageSection>

      <PageSection>
        <p>
          Virtual Private Networks or VPNs are tools to make your connection to the internet more
          secure.
        </p>
        <p>Using a VPN can have multiple advantages:</p>
        <ol className="ml-4 list-decimal">
          <li>Your Internet Service Provider (ISP) can not see what you are doing online.</li>
          <li>Websites can not see your real IP address, which makes it harder to track you.</li>
          <li>
            You can pretend to be from another country and watch movies, that are not available
            where you live.
          </li>
          <li>Many VPN providers include the option to block tracking and advertising urls.</li>
        </ol>
        <p>
          The only downside of using a VPN provider is, that you need to trust them to not track you
          themself.
        </p>
        <p>
          I did some research on that and here are my two recommendations for VPN providers, that
          don't save any data about you:
        </p>
        <div className="flex flex-row items-end justify-center gap-8 p-4 sm:gap-12">
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://mullvad.net/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-8 sm:w-12" src="/img/vpns/mullvad-vpn.svg" alt="mullvad" />
            <p className="text-lg sm:text-2xl">
              Mullvad VPN <small className="hidden sm:inline">*best</small>
            </p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://protonvpn.com/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-8 sm:w-12" src="/img/vpns/proton-vpn.svg" alt="proton-vpn" />
            <p className="text-lg sm:text-2xl">Proton VPN</p>
          </a>
        </div>
      </PageSection>

      <PageSection bg>
        <p>There is even more, that can be done!</p>
        <h3 className="mt-2">Search Engines:</h3>
        <p>It is very important to use a search engine, that does not track you.</p>
        <p>Using Google is really bad, because they use all your data for advertisement.</p>
        <p>
          Really good alternatives are{" "}
          <a
            className="cursor-pointer underline"
            href="https://duckduckgo.com/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            DuckDuckGo
          </a>{" "}
          or{" "}
          <a
            className="cursor-pointer underline"
            href="https://www.startpage.com/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Startpage
          </a>
          . They even somtimes give better search results!
        </p>

        <h3 className="mt-2">Canvas Blocker Ad-On:</h3>
        <p>
          There is a really good ad-on called{" "}
          <a
            className="cursor-pointer underline"
            href="https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Canvas Blocker
          </a>{" "}
          that can help protecting your browser from fingerprinting.
        </p>

        <h3 className="mt-2">Change your online behaviour:</h3>
        <p>
          Not using the same browser for everything can also help, as tracking someone across
          browsers is more difficult.
        </p>
        <p>
          For example: using one browser for social media and another for searching, can help keep
          contexts separated.
        </p>

        <p className="mt-4">Now, that you know more about tracking and how to protect yourself:</p>

        <Link
          to="/test"
          className="bg-surface-darker text-bold font-heading cursor-pointer self-end border-4 px-2 text-lg"
        >
          Are you ready to test your browser? →
        </Link>
      </PageSection>
    </>
  );
};

export default Mitigation;
