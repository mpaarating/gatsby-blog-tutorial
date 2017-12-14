import React from "react";
import PropTypes from "prop-types";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { rhythm } from "../utils/typography";

const Header = () => (
  <g.Div>
    <Link to={"/"}>
      <g.H4
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        HOME
      </g.H4>
    </Link>
  </g.Div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ALEX M LEWIS"
      meta={[
        {
          name: "description",
          content:
            "A personal blog created and maintained by Alex Lewis."
        },
        {
          name: "keywords",
          content: "javascript, product management, learning"
        }
      ]}
    />
    <g.Div
      margin={`0 auto`}
      maxWidth={720}
      padding={rhythm(1)}
    >
      <Header />
      {children()}
    </g.Div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
