import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { skin } from '../../assets/colors'

const StyledTaskList = styled.li`
  display: block;
  width: 620px;
  height: 102px;
  background-color: ${skin};

  margin-bottom: 8px;
`

export default class TaskList extends Component {
  render() {
    return <StyledTaskList />
  }
}
