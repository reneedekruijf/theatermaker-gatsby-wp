import React, { useState, useEffect } from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Styled from 'styled-components'

import colors from '../../styles/colors';

import LargeMenu from '../menu/large-menu/large-menu.component'
import SmallMenu from '../menu/small-menu/small-menu.component'


const FirstHeading = Styled.h1`
  text-transform: uppercase;
  margin: 1rem 0 0 2rem;
`;

const StyledLink = Styled(Link)`
  color: ${colors.black};

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${colors.grey};
  }
`;

const HeaderWrapper = Styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
`;


export default () => {
  const [windowSize, setWindowSize] = useState(700);

  const handleWindowSize = () => {
    const windowSize = window.innerWidth;
    setWindowSize(windowSize);
  }


  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    window.addEventListener('load', handleWindowSize);
  });

  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allWp {
            edges {
      node {
        generalSettings {
          title
        }
      }
    }
  }
        }
      `}
      render={data => (
        <HeaderWrapper>
          <StyledLink to="/">
            <FirstHeading>{data.allWp.edges.map(({ node }) => node.generalSettings.title)}</FirstHeading>
          </StyledLink>
          {windowSize < 1035 ? <SmallMenu /> : <LargeMenu />}
        </HeaderWrapper>
      )}
    />
  )
}













      // export default () => (
//   <Link to="/">
//     <h1>Sylke van de Calseijde Theatermaker</h1>
//   </Link>
// )

// export const query = graphql`
//   allWp {
//     edges {
//       node {
//         generalSettings {
//           title
//         }
//       }
//     }
//   }
// `
