import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './index.css'


const Header = () => {
    return(
    <HeaderContainer>
      <TextMenu>HEADER</TextMenu>
    </HeaderContainer>
    )
}

const TextMenu = styled.span`
  color:white;
`

const HeaderContainer = styled.div`
  padding:12px;
  background-color: #222222;
  display:flex;
  justify-content:center;
  align-items:center;
`

Header.propTypes = {
  label: PropTypes.string
}

export default Header