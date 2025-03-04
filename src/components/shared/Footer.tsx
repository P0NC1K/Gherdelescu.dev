import React from "react";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FiRss } from "@react-icons/all-files/fi/FiRss";

import HyperLink from "./HyperLink";
import { discussionsURL, rssPath, gmailURL } from "../../constants/links";
import { Link } from "../../types/Link";
import Row from "./Row";
import SocialLinks from "./SocialLinks";
import { profile } from "../../data/profile";

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = "" } = props;

  const issuesLink: Link = {
    url: discussionsURL,
  };

  const subscribeLink: Link = {
    url: gmailURL,
  };

  const rssLink: Link = {
    url: rssPath,
  };

  return (
    <footer className={`${className}`}>
      <Row responsive>
        <Row style={{ flex: 1 }} className="mb-6 sm:mb-0">
          <HyperLink
            link={subscribeLink}
            className="text-xs mr-5"
            startEnhancer={<AiOutlineMail size={20} />}
          >
            E-mail Me
          </HyperLink>

          <HyperLink
            link={issuesLink}
            className="text-xs mr-5"
            startEnhancer={<FiGithub size={20} />}
          >
            Feedback
          </HyperLink>
        </Row>

        {/* <div
          style={{ flex: 1 }}
          className="flex flex-row items-center justify-center"
        >
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            iconClassName="w-5 h-5"
            itemClassName="mr-2 ml-2"
          />
        </div> */}

        <div style={{ flex: 1 }} className="hidden sm:flex">
          &nbsp;
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
