import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Logo = styled.h1``

const Header = ({}) => (
  <header>
    <Logo>
      <Link to="/">XYZ</Link>
    </Logo>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
