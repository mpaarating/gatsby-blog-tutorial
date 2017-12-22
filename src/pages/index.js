import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const IndexPage = ({ data }) => (
  <div>
    <g.Div>
      <g.H1 fontSize={rhythm(1)}>Hi people</g.H1>
      {data.allContentfulPost.edges.map(({ node }) => (
        <g.Div>
          <g.Div textAlign={`center`}>
            {node.featuredImage ? (
              <g.Img src={node.featuredImage.file.url} />
            ) : null}
          </g.Div>

          <h1>{node.title.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: node.body.childMarkdownRemark.html
            }}
          />
          <hr />
        </g.Div>
      ))}
    </g.Div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allContentfulPost {
      edges {
        node {
          author {
            name
          }
          createdAt
          body {
            childMarkdownRemark {
              html
            }
          }
          title {
            title
          }
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
