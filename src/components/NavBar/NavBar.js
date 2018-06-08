import React from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'
import NavItems from './NavItems'
const StyledNavBar = styled.div`
  height: 76px;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a90e2;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavItems />
    </StyledNavBar>
  )
}

export default NavBar
