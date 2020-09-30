import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { normalizePath } from "../../../utils/get-url-path"
import Styled from "styled-components"

import colors from "../../../styles/colors"

const List = Styled.ul`
  list-style-type: none;

  li {
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: ${colors.black};

    &:hover,
    &:focus {
      color: ${colors.darkGrey};
      text-decoration: underline;
    }
  }
`
export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    // <NavWrapper>
    <List id="menu">
      {wpMenu.menuItems.nodes.map((menuItem, i) => {
        if (menuItem.parentId) {
          return null
        }

        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        return (
          <li key={i + menuItem.url}>
            <Link to={normalizePath(path)}>{menuItem.label}</Link>
          </li>
        )
      })}
    </List>
  ) : null
}
