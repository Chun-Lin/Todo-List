import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { white, deepBlue } from '../../assets/colors'

const StyledList = styled.li`
  width: 160px;
  height: 76px;
  font-size: 24px;
  display: block;
  margin: 0 15px;
`

const StyledNavLink = styled(NavLink)`
  width: 160px;
  height: 100%;
  box-sizing: border-box;
  color: white;
  text-decoration: none;
  justify-content: center;
  display: flex;
  align-items: center;
`

const NavItem = ({ children }) => {
  return (
    <StyledList>
      <StyledNavLink
        to="/"
        activeStyle={{
          borderBottom: `5px solid ${deepBlue}`,
        }}
      >
        {children}
      </StyledNavLink>
    </StyledList>
  )
}

export default NavItem
