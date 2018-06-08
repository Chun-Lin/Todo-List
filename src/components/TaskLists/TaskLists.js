import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TaskList from './TaskList'

const StyledTaskLists = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class TaskLists extends Component {
  render() {
    return (
      <StyledTaskLists>
        <TaskList />
        <TaskList />
        <TaskList />
      </StyledTaskLists>
    )
  }
}
