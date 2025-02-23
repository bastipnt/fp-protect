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
          <SectionTitle>Mitigating Web Tracking</SectionTitle> doesn't have to be complicated.
        </p>
        <p>
          This guide is designed to provide you with tools and strategies to enhance your online
          privacy!
        </p>
        <p>
          From selecting the right browser and using a privacy-focused search engine to installing
          ad-blocking extensions, there are numerous steps you can take to protect yourself.
        </p>
        <p>
          Since the effectiveness of these measures can vary depending on the device you are using
          (whether it's a phone or desktop, Android or iOS), this guide offers tailored suggestions
          based on your current environment. Feel free to open this page on another device to
          explore the differences.
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

        <RecommendationOverview area="best" bg preview />
      </PageSection>

      <PageSection>
        <p>
          <SectionTitle>Browsers</SectionTitle> can significantly impact your online tracking
          experience! Did you know that?
        </p>
        <p>Not all browsers prioritize your privacy equally.</p>
        <p>
          While many people use <strong>Google Chrome</strong>, it is actually one of the least
          privacy-friendly options available if you want to minimize tracking.
        </p>
        <p>
          The reason for this is that Google generates billions of dollars each year from targeted
          advertising, making it in their interest to track your online behavior extensively.
        </p>
        <p>
          Fortunately, there are alternative browsers that are more focused on protecting your
          privacy.
        </p>
        <p>Here are my recommendations:</p>

        <RecommendationOverview area="browsers" />
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>Ad Blockers</SectionTitle> can effectively protect your personal data
          online.
        </p>
        <p>Did you know that most ad blockers not only block ads but also prevent web tracking?</p>
        <p>
          They achieve this through the use of <strong>filter lists</strong>, which contain numerous
          URLs of known advertisers and trackers.
        </p>
        <p>URLs from these lists are blocked from loading, helping to safeguard your privacy.</p>
        <p>
          There are many different ad blocker extensions available, some of which are free while
          others require a subscription.
        </p>
        <p>Fortunately, some of the best options are completely free:</p>

        <RecommendationOverview area="adBlockers" bg />
      </PageSection>

      <PageSection id="vpn">
        <p>
          <SectionTitle>Virtual Private Networks</SectionTitle> (VPNs) are tools that can make your
          internet connection more secure.
        </p>
        <p>Using a VPN offers several advantages:</p>

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
        <p>
          The only downside to using a VPN is that you must trust the provider not to track your
          activities themselves.
        </p>
        <p>
          After doing some research, here are my two recommendations for VPN providers that do not
          log any data about you:
        </p>

        <RecommendationOverview area="vpns" />
      </PageSection>

      <PageSection bg>
        <p>
          <SectionTitle>Search Engines</SectionTitle> gather extensive information about you. Every
          search you make is stored and utilized to deliver ads that align with your profile.{" "}
          <strong>Google</strong>, in particular, knows a great deal about you, as it is the most
          widely used search engine in the world.
        </p>
        <p>
          However, there are search engines that prioritize your privacy and do not use your data
          for advertising purposes. Two notable examples are:
        </p>

        <RecommendationOverview area="searchEngines" bg />
      </PageSection>

      <PageSection>
        <p>
          <SectionTitle>Fingerprint Protection</SectionTitle> can be particularly challenging. If
          you are using a privacy-focused browser like <strong>LibreWolf</strong>, you are on the
          right track.
        </p>
        <p>But what if you prefer to use a different browser?</p>
        <p>
          The <strong>Canvas Blocker</strong> extension provides fingerprint protection also for
          other browsers. (It is not available for iOS)
        </p>

        <RecommendationOverview area="fingerprintProtection" />
      </PageSection>

      <PageSection bg>
        <p>There is even more you can do to enhance your online privacy!</p>

        <p>
          <SectionTitle>Changing Your Online Behavior</SectionTitle> can also make a significant
          difference.
        </p>
        <p>
          Avoiding the use of the same browser for all your activities can help mitigate tracking,
          as it becomes more challenging to track someone across different browsers. For instance,
          using one browser for social media and another for web searches can help keep your
          contexts separate.
        </p>

        <p>
          Now that you have a better understanding of tracking and how to protect yourself, it's
          time to take the test! How well are you protected?
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
