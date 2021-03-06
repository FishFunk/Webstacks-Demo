import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import ColorPanel from '../components/color-panel';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const colors = get(this, 'props.data.allContentfulColorPanel.edges');
    const heroData = get(this, 'props.data.contentfulHero');

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />
          <Hero data={heroData}/>
          <div class='gradient50'>
            <div class="cardWrapper">
                {colors.map(({ node }) => {
                  return (
                    <ColorPanel card={node} />
                  )
                })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulColorPanel(sort: {fields: color}) {
      edges {
        node {
          color
          info
          cardImage {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    contentfulHero {
      header
      details
      button {
        link
        title
      }
    }
  }
`
