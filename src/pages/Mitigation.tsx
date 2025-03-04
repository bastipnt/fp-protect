import { useContext } from "react";
import { Trans } from "react-i18next";
import { Link } from "wouter";
import Card from "../components/Card";
import PageSection from "../components/PageSection";
import RecommendationOverview from "../components/RecommendationOverview";
import Reference from "../components/Reference";
import SectionTitle from "../components/SectionTitle";
import { DeviceContext } from "../providers/deviceProvider";

const Mitigation: React.FC = () => {
  const { os, browser } = useContext(DeviceContext);
  return (
    <>
      <PageSection>
        <p>
          <Trans i18nKey="mitigation.intro">
            <SectionTitle>Mitigating Web Tracking</SectionTitle> doesn't have to be complicated.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.intro-1">
            This guide is designed to provide you with tools and strategies to enhance your online
            privacy!
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.intro-2">
            From selecting the right <strong>browser</strong> and using a{" "}
            <strong>privacy-focused search engine</strong> to installing{" "}
            <strong>ad-blocking extensions</strong>, there are numerous steps you can take to
            protect yourself.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.intro-3">
            Since the effectiveness of these measures can vary depending on the device you are using
            (whether it's a phone or desktop, Android or iOS), this guide offers tailored
            suggestions based on your current environment.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.intro-4">
            Feel free to open this page on another device to explore the differences.
          </Trans>
        </p>

        <Card className="mt-8 sm:mt-12">
          <p className="text-center text-xl">
            <Trans i18nKey="mitigation.intro-5">Currently seeing recommendations for:</Trans>
          </p>
          <h2 className="text-center text-2xl">
            <span>{os}</span> | <span>{browser}</span>
          </h2>
        </Card>
      </PageSection>

      <PageSection bg>
        <p>
          <Trans i18nKey="mitigation.top-recommendations">
            <SectionTitle>tldr;</SectionTitle> these are the top recommendations for your current
            device and browser:
          </Trans>
        </p>

        <RecommendationOverview area="best" bg preview />
      </PageSection>

      <PageSection referenceIds={["BrowserMarketShare2024", "GoogleSettlesLawsuit"]}>
        <p>
          <Trans i18nKey="mitigation.browsers">
            <SectionTitle>Browsers</SectionTitle> can significantly impact your online tracking
            experience! Did you know that?
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.browsers-1">
            Not all browsers prioritize your privacy equally.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.browsers-2">
            While many people use <strong>Google Chrome</strong>
            <Reference referenceId="BrowserMarketShare2024" />, it is actually one of the least
            privacy-friendly options available if you want to minimize tracking
            <Reference referenceId={"GoogleSettlesLawsuit"} />.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.browsers-3">
            The reason for this is that Google generates billions of dollars each year from targeted
            advertising, making it in their interest to track your online behavior extensively.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.browsers-4">
            Fortunately, there are alternative browsers that are more focused on protecting your
            privacy.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.browsers-5">Here are my recommendations:</Trans>
        </p>

        <RecommendationOverview area="browsers" />
      </PageSection>

      <PageSection referenceIds={["madikeriAdBlockersOnline2024"]} bg>
        <p>
          <Trans i18nKey="mitigation.ad-blockers">
            <SectionTitle>Ad Blockers</SectionTitle> can effectively protect your personal data
            online
          </Trans>
          <Reference referenceId={"madikeriAdBlockersOnline2024"} />.
        </p>
        <p>
          <Trans i18nKey="mitigation.ad-blockers-1">
            Did you know that most ad blockers not only block ads but also prevent web tracking?
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.ad-blockers-2">
            They achieve this through the use of <strong>filter lists</strong>, which contain
            numerous URLs of known advertisers and trackers.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.ad-blockers-3">
            URLs from these lists are blocked from loading, helping to safeguard your privacy.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.ad-blockers-4">
            There are many different ad blocker extensions available, some of which are free while
            others require a subscription.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.ad-blockers-5">
            Not every ad blocker blocks all ads by default, as they should. Thats why this list of
            recommendations is pretty short.
          </Trans>
        </p>

        <RecommendationOverview area="adBlockers" bg />
      </PageSection>

      <PageSection id="vpn" referenceIds={["gilbertsonBestVPNsProtect2025"]}>
        <p>
          <Trans i18nKey="mitigation.vpn">
            <SectionTitle>Virtual Private Networks</SectionTitle> (VPNs) are tools that can make
            your internet connection more secure.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.vpn-1">Using a VPN offers several advantages</Trans>
          <Reference referenceId={"gilbertsonBestVPNsProtect2025"} />:
        </p>

        <Trans i18nKey="mitigation.vpn-ol">
          <ol className="ml-4 list-decimal">
            <li>Your Internet Service Provider (ISP) cannot see your online activities.</li>
            <li>
              Websites cannot access your real IP address, making it more difficult to track you.
            </li>
            <li>
              You can appear to be located in another country, allowing you to access movies and
              content that may not be available in your region.
            </li>
            <li>Many VPN providers offer features to block tracking and advertising URLs.</li>
          </ol>
        </Trans>
        <p>
          <Trans i18nKey="mitigation.vpn-2">
            The only downside to using a VPN is that you must trust the provider not to track your
            activities themselves.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.vpn-3">
            After doing some research, here are my two recommendations for VPN providers that are
            trustworthy and do not log any data about you:
          </Trans>
        </p>

        <RecommendationOverview area="vpns" />
      </PageSection>

      <PageSection bg referenceIds={["wesslerHowPrivateYour2013", "RecommendedSearchEngines2024"]}>
        <p>
          <Trans i18nKey="mitigation.search-engines">
            <SectionTitle>Search Engines</SectionTitle> gather extensive information about you.
            Every search you make is stored and utilized to deliver ads that align with your profile
            <Reference referenceId={"wesslerHowPrivateYour2013"} />. <strong>Google</strong>, in
            particular, knows a great deal about you, as it is the most widely used search engine in
            the world.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.search-engines-1">
            However, there are search engines that prioritize your privacy and do not use your data
            for advertising purposes. Two notable examples are
          </Trans>
          <Reference referenceId={"RecommendedSearchEngines2024"} />:
        </p>

        <RecommendationOverview area="searchEngines" bg />
      </PageSection>

      <PageSection>
        <p>
          <Trans i18nKey="mitigation.fp-protection">
            <SectionTitle>Fingerprint Protection</SectionTitle> can be particularly challenging.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.fp-protection-1">
            If you are using a privacy-focused browser like <strong>LibreWolf</strong>, you are on
            the right track. But what if you prefer to use a different browser?
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.fp-protection-2">
            There are some extensions aimed to tackle this problem. But they are not available for
            every device or browser. If you are using an iOS device there is nothing you can do,
            other than trust Apple, that their new privacy features do protect you.
          </Trans>
        </p>
        {os !== "iOS" && (
          <p>
            <Trans i18nKey="mitigation.fp-protection-3">
              For other devices these are the recommendations:
            </Trans>
          </p>
        )}

        <RecommendationOverview area="fingerprintProtection" />
      </PageSection>

      <PageSection bg referenceIds={["teamWhatAreTracking"]}>
        <p>
          <Trans i18nKey="mitigation.more">
            There is even more you can do to enhance your online privacy!
          </Trans>
        </p>

        <p>
          <Trans i18nKey="mitigation.more-1">
            <SectionTitle>Changing Your Online Behavior</SectionTitle> can also make a significant
            difference.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.more-2">
            Avoiding the use of the same browser for all your activities can help mitigate tracking,
            as it becomes more challenging to track someone across different browsers. For instance,
            using one browser for social media and another for web searches can help keep your
            contexts separate.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.more-3">
            Not loading images by default in email programs is also recommended to protect you
            against Tracking Pixels.
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.more-4">
            Regularly clearing cookies and using browser extensions to manage them, also can prevent
            long-term tracking
          </Trans>
          <Reference referenceId={"teamWhatAreTracking"} />
        </p>
        <p>
          <Trans i18nKey="mitigation.more-5">
            Hopefully this guide could help you to experience a more private browsing experience!
          </Trans>
        </p>
        <p>
          <Trans i18nKey="mitigation.more-6">
            Now that you have a better understanding of tracking and how to protect yourself, it's
            time to take the test! How well are you protected?
          </Trans>
        </p>
      </PageSection>

      <Link
        to="/test"
        className="font-heading bg-surface-darker-half m-4 my-8 rounded-2xl border-2 border-dashed p-4 text-center text-2xl"
      >
        <Trans i18nKey="mitigation.test-link">I want to test my browser</Trans>
      </Link>
    </>
  );
};

export default Mitigation;
