import React, { useState } from "react"
import Styled from "styled-components"

import MenuItems from "../menu-items/menu-items.component"

const MenuWrapper = Styled.nav`
  display: ${(props) => (!props.show ? "none" : "grid")};
  justify-items: center;
  grid-gap: 10px;
  margin: 1rem 0 0 1rem;
  text-align:left;

  a {
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  ul {
    margin-top: 4rem;
  } 
`

const HamburgerButton = Styled.button`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
`

export default function SmallMenu() {
  const [smallMenu, setSmallMenu] = useState(false)

  return (
    <>
      <HamburgerButton
        onClick={() => (!smallMenu ? setSmallMenu(true) : setSmallMenu(false))}
        aria-expanded={!smallMenu ? "false" : "true"}
        aria-controls="menu"
      >
        {!smallMenu ? "menu" : "menu x"}
      </HamburgerButton>
      <MenuWrapper show={smallMenu}>
        <MenuItems />
      </MenuWrapper>
    </>
  )
}
