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
              bg
            />
          </li>
          <li>
            <ImgLink
              title="uBlock Origin Ad Blocker"
              href="https://ublockorigin.com/"
              imgUrl="/img/adblockers/ublockorigin.png"
              bg
            />
          </li>
          <li>
            <ImgLink
              title="Mullvad VPN"
              href="https://mullvad.net/"
              imgUrl="/img/vpns/mullvad-vpn.svg"
              bg
            />
          </li>
          <li>
            <ImgLink
              title="DuckDuckGo Search Engine"
              href="https://duckduckgo.com/"
              imgUrl="/img/searchEngines/duckduckgo.svg"
              bg
            />
          </li>
          <li className="sm:col-span-2">
            <ImgLink
              title="CanvasBlocker Extension"
              href="https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/"
              imgUrl="/img/other/canvas-blocker.png"
              bg
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
          advertisement. So it is in their interest to track you even more.
        </p>
        <p>Luckily there are other browsers, that are more focused on your privacy.</p>
        <p>My recommendations are the following:</p>

        <ul className="mt-8 grid grid-cols-2 gap-4">
          <li>
            <ImgLink
              title="LibreWolff"
              href="https://librewolf.net/"
              imgUrl="/img/browsers/librewolff.png"
            />
          </li>
          <li>
            <ImgLink
              title="Firefox"
              href="https://www.mozilla.org/en-US/firefox/new/"
              imgUrl="/img/browsers/firefox.png"
            />
          </li>
        </ul>
      </PageSection>

      <PageSection bg>
        <p>
          <span className="font-heading text-xl">Ad Blockers</span> Can also protect your personal
          data online.
        </p>
        <p>Did you know that most ad blockers not only block ads, but also web tracking?</p>
        <p>
          This works with so called filter lists. These include many urls of known advertisers and
          trackers.
        </p>
        <p>Urls from this list are prevented from loading.</p>
        <p>
          There are a lot of different ad blocker extensions. Some are free and some cost money.
        </p>
        <p>Luckily the best ones are for free:</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          <li>
            <ImgLink
              title="
              uBlock Origin"
              href="https://ublockorigin.com/"
              imgUrl="/img/adblockers/ublockorigin.png"
              bg
            />
          </li>
          <li>
            <ImgLink
              title="Privacy Badger"
              href="https://privacybadger.org/"
              imgUrl="/img/adblockers/privacy-badger.png"
              bg
            />
          </li>
          <li>
            <ImgLink
              title="Ghostery"
              href="https://www.ghostery.com/"
              imgUrl="/img/adblockers/ghostery.png"
              bg
            />
          </li>
        </ul>
      </PageSection>

      <PageSection id="vpn">
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
          them self.
        </p>
        <p>
          I did some research on that and here are my two recommendations for VPN providers, that
          don't save any data about you:
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-4">
          <li>
            <ImgLink
              title="Mullvad VPN"
              href="https://mullvad.net/"
              imgUrl="/img/vpns/mullvad-vpn.svg"
            />
          </li>
          <li>
            <ImgLink
              title="Proton VPN"
              href="https://protonvpn.com/"
              imgUrl="/img/vpns/proton-vpn.svg"
            />
          </li>
        </ul>
      </PageSection>

      <PageSection bg>
        <p>
          <span className="font-heading text-xl">Search Engines</span> know a lot about you.
          Everything you search for is stored and used to deliver you ads, that match your profile.
          Especially Google knows a lot, as it is the most used search engine in the world.
        </p>
        <p>
          But there are also search engines that protect you privacy and don't use your data for
          advertisement. Two of them are:
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-4">
          <li>
            <ImgLink
              title="DuckDuckGo"
              href="https://duckduckgo.com/"
              imgUrl="/img/searchEngines/duckduckgo.svg"
              bg
            />
          </li>
          <li>
            <ImgLink
              title="StartPage"
              href="https://www.startpage.com/"
              imgUrl="/img/searchEngines/startpage.svg"
              bg
            />
          </li>
        </ul>
      </PageSection>

      <PageSection>
        <p>
          Especially <span className="font-heading text-xl">Fingerprint Protection</span> can be
          hard. If you are using a privacy focused browser like LibreWolff you are good.
        </p>
        <p>But what if you want to use a different browser?</p>
        <p>The Canvas Blocker extension adds fingerprint protection also to other browsers:</p>

        <ul className="mt-8 grid grid-cols-2 gap-4">
          <li>
            <ImgLink
              title="CanvasBlocker (Firefox)"
              href="https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/"
              imgUrl="/img/other/canvas-blocker.png"
            />
          </li>
          <li>
            <ImgLink
              title="CanvasBlocker (Chrome)"
              href="https://chromewebstore.google.com/detail/canvas-blocker-fingerprin/nomnklagbgmgghhjidfhnoelnjfndfpd"
              imgUrl="/img/other/canvas-blocker.png"
            />
          </li>
        </ul>
      </PageSection>

      <PageSection bg>
        <p>There is even more, that can be done!</p>

        <p>
          <span className="font-heading text-xl">Changing your online behavior</span> can also help.
        </p>
        <p>
          Not using the same browser for everything can also mitigate tracking, as tracking someone
          across different browsers is more difficult. For example: using one browser for social
          media and another for searching, can help keep contexts separated.
        </p>

        <p>
          Now, that you know more about tracking and how to protect yourself, you can make the test!
          How good are you protected?
        </p>
      </PageSection>

      <Link
        to="/test"
        className="font-heading bg-surface-darker-half m-4 my-8 rounded-2xl border-2 border-dashed p-4 text-center text-2xl"
      >
        I want to test my browser
      </Link>
    </>
  );
};

export default Mitigation;
