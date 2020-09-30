import React from "react"
import Styled from "styled-components"

import MenuItems from "../menu-items/menu-items.component"

const MenuWrapper = Styled.nav`
  display: flex;
  justify-content: flex-end;
  
  a {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 1rem 1.3rem 1rem 0;
  }

  li {
    display: inline-block;
  }
`

export default function LargeMenu() {
  return (
    <MenuWrapper>
      <MenuItems />
    </MenuWrapper>
  )
}
