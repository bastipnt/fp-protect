import { ReactNode, useState } from "react";
import { Link } from "wouter";

enum Tabs {
  BROWSERS = "browsers",
  AD_BLOCKERS = "adBlockers",
  VPN = "VPN",
  OTHER = "otherTools",
}

const Mitigation: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.BROWSERS);

  const tabs: { [key in Tabs]: ReactNode } = {
    [Tabs.BROWSERS]: (
      <>
        <p>
          Did you know, that it can make a huge difference which browser you are using, when it
          comes to tracking?
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
        <div className="flex flex-row items-end justify-center gap-12 p-4">
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://www.mozilla.org/en-US/firefox/new/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-12" src="/img/browsers/firefox.png" alt="firefox" />
            <p className="text-2xl">Firefox</p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://brave.com/download/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-10" src="/img/browsers/brave.png" alt="brave" />
            <p className="text-2xl">Brave</p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://librewolf.net/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-12" src="/img/browsers/librewolff.png" alt="librewolff" />
            <p className="text-2xl">
              LibreWolff <small>*best</small>
            </p>
          </a>
        </div>
      </>
    ),
    [Tabs.AD_BLOCKERS]: (
      <>
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
        <div className="flex flex-row items-end justify-center gap-12 p-4">
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://ublockorigin.com/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-12" src="/img/adblockers/ublockorigin.png" alt="ublockorigin" />
            <p className="text-2xl">
              uBlock Origin <small>*best</small>
            </p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://privacybadger.org/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-18" src="/img/adblockers/privacy-badger.png" alt="privacy-badger" />
            <p className="text-2xl">Privacy Badger</p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://www.ghostery.com/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-12" src="/img/adblockers/ghostery.png" alt="ghostery" />
            <p className="text-2xl">Ghostery</p>
          </a>
        </div>
      </>
    ),
    [Tabs.VPN]: (
      <>
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
        <div className="flex flex-row items-end justify-center gap-12 p-4">
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://mullvad.net/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-12" src="/img/vpns/mullvad-vpn.svg" alt="mullvad" />
            <p className="text-2xl">
              Mullvad VPN <small>*best</small>
            </p>
          </a>
          <a
            className="flex cursor-pointer flex-col items-center gap-2 align-middle"
            href="https://protonvpn.com/"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <img className="w-12" src="/img/vpns/proton-vpn.svg" alt="proton-vpn" />
            <p className="text-2xl">Proton VPN</p>
          </a>
        </div>
      </>
    ),
    [Tabs.OTHER]: (
      <>
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
      </>
    ),
  };

  return (
    <section className="bg-surface flex min-h-[50vh] w-full max-w-[900px] flex-col border-4">
      <div className="bg-surface-darker flex flex-row justify-between gap-8 border-b-4 p-2 px-4">
        <button
          className={`font-heading cursor-pointer ${currentTab === Tabs.BROWSERS ? "bg-surface" : ""} p-2 text-2xl`}
          onClick={() => setCurrentTab(Tabs.BROWSERS)}
        >
          Browsers
        </button>
        <button
          className={`font-heading cursor-pointer ${currentTab === Tabs.AD_BLOCKERS ? "bg-surface" : ""} p-2 text-2xl`}
          onClick={() => setCurrentTab(Tabs.AD_BLOCKERS)}
        >
          Ad Blockers
        </button>
        <button
          className={`font-heading cursor-pointer ${currentTab === Tabs.VPN ? "bg-surface" : ""} p-2 text-2xl`}
          onClick={() => setCurrentTab(Tabs.VPN)}
        >
          VPNs
        </button>
        <button
          className={`font-heading cursor-pointer ${currentTab === Tabs.OTHER ? "bg-surface" : ""} p-2 text-2xl`}
          onClick={() => setCurrentTab(Tabs.OTHER)}
        >
          Other Tools
        </button>
      </div>
      <div className="flex flex-col gap-2 p-4">{tabs[currentTab]}</div>
    </section>
  );
};

export default Mitigation;
