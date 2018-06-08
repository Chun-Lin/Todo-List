import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavBar from '../components/NavBar/NavBar'
const StyledMain = styled.main`
  margin-top: 76px;
`

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <NavBar />
        <StyledMain>{children}</StyledMain>
      </Fragment>
    )
  }
}
