import { useContext } from "react";
import { Link } from "wouter";
import Card from "../components/Card";
import PageSection from "../components/PageSection";
import RecommendationOverview from "../components/RecommendationOverview";
import SectionTitle from "../components/SectionTitle";
import { ResponsivenessContext } from "../providers/responsivenessProvider";

const Mitigation: React.FC = () => {
  const { os, isMobile } = useContext(ResponsivenessContext);
  return (
    <>
      <PageSection>
        <p>
          <SectionTitle>Mitigating web tracking</SectionTitle> doesn't need to be that hard.
        </p>
        <p>This guide is designed to show you some tools and tricks to gain more online privacy!</p>
        <p>
          From choosing the right browser, using a privacy focused search engine, to installing ad
          blocking extensions, there are many things that can be done.
        </p>
        <p>
          Since it makes a difference which device you are using (phone or desktop — android or ios)
          this guide shows you different suggestions based on your current environment. Go open this
          page on another device to see the differences.
        </p>
        <Card className="mt-8 sm:mt-12">
          <p className="text-center text-xl">Currently seeing content for:</p>
          <h2 className="text-center text-2xl">
            {isMobile ? "Mobile" : "Desktop"} ({os})
          </h2>
        </Card>
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>tldr;</SectionTitle> these are my top recommendations:
        </p>

        <RecommendationOverview area="best" bg />
      </PageSection>

      <PageSection>
        <p>
          <SectionTitle>Browsers</SectionTitle> can make a huge difference when it comes to
          tracking! Did you know that?
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

        <RecommendationOverview area="browsers" />
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>Ad Blockers</SectionTitle> Can also protect your personal data online.
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

        <RecommendationOverview area="adBlockers" bg />
      </PageSection>

      <PageSection id="vpn">
        <p>
          <SectionTitle>Virtual Private Networks</SectionTitle> or VPNs are tools to make your
          connection to the internet more secure.
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

        <RecommendationOverview area="vpns" />
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>Search Engines</SectionTitle> know a lot about you. Everything you search
          for is stored and used to deliver you ads, that match your profile. Especially Google
          knows a lot, as it is the most used search engine in the world.
        </p>
        <p>
          But there are also search engines that protect you privacy and don't use your data for
          advertisement. Two of them are:
        </p>

        <RecommendationOverview area="searchEngines" bg />
      </PageSection>

      <PageSection>
        <p>
          Especially <SectionTitle>Fingerprint Protection</SectionTitle> can be hard. If you are
          using a privacy focused browser like LibreWolff you are good.
        </p>
        <p>But what if you want to use a different browser?</p>
        <p>The Canvas Blocker extension adds fingerprint protection also to other browsers:</p>

        <RecommendationOverview area="fingerprintProtection" />
      </PageSection>

      <PageSection bg>
        <p>There is even more, that can be done!</p>

        <p>
          <SectionTitle>Changing your online behavior</SectionTitle> can also help.
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
