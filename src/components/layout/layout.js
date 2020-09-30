import React from "react"
import { createGlobalStyle } from 'styled-components'

import Header from "../header/header"

import "normalize.css"


const GloblaStyle = createGlobalStyle`
  body {
    font-size: 100%;
    overflow: hidden;
    font-family: "Karla";
  }
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <GloblaStyle />
    <Header />
    {children}
  </React.Fragment>
)

export default Layout
