import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { skin } from '../../assets/colors'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const StyledTaskList = styled.div`
  width: 620px;
  height: 102px;
  background-color: ${skin};
  font-size: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
  padding: 24px 32px 17px 32px;
`

const TitleWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`

const StyledCheckbox = styled.input`
  margin: 0;
  margin-right: 16px;
`

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
`

const Star = styled(FontAwesomeIcon)`
  right: ${props => (props.icon === 'star' ? '0px' : null)};
  margin-right: ${props => (props.icon === 'star' ? '32px' : '0px')};
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`

const SmallIconWrapper = styled.div`
  position: relative;
  margin-top: 43px;
  margin-left: 40px;
`

const Calender = styled(FontAwesomeIcon)`
  margin-right: ${props => (props.icon === 'calendar-alt' ? '8px' : '0px')};
`

const StyledSpan = styled.span`
  margin-right: 16px;
`

const File = styled(FontAwesomeIcon)`
  ${'' /* right: ${props => (props.icon === 'star' ? '0px' : null)}; */}
  margin-right: ${props => (props.icon === 'file-alt' ? '16px' : '0px')};
`

export default class TaskList extends Component {
  render() {
    return (
      <StyledTaskList>
        <TitleWrapper>
          <StyledLabel>
            <StyledCheckbox type="checkbox" />
            Type Something
          </StyledLabel>
          <IconWrapper>
            <Star icon="star" color="brown" />
            <FontAwesomeIcon icon="edit" />
          </IconWrapper>
        </TitleWrapper>
        <SmallIconWrapper>
          <Calender icon="calendar-alt" />
          <StyledSpan>5/14</StyledSpan>
          <File icon="file-alt" />
          <FontAwesomeIcon icon="comment" />
        </SmallIconWrapper>
      </StyledTaskList>
    )
  }
}
