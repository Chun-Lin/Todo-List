import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const StyledNavItems = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;
  list-style: none;
`

const NavItems = () => {
  return (
    <StyledNavItems>
      <NavItem>My Tasks</NavItem>
      <NavItem>In Progress</NavItem>
      <NavItem>Completed</NavItem>
    </StyledNavItems>
  )
}

export default NavItems
