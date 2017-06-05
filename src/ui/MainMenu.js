import React, { Component } from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 400px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
`
const Header = styled.h2`
  margin-bottom: 20px;
`
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 2px #fff;
    }
`

export default class MainMenu extends Component {

  startGame = () => {
    document.querySelector('#root').webkitRequestFullscreen()
    this.props.startGame()
  }

  render(){
    return (
      <MenuContainer>
        <Header> Can JavaScript into space? </Header>
        <MenuItem onClick={this.startGame}>
          Start
        </MenuItem>
        <MenuItem> Load </MenuItem>
        <MenuItem> Quit </MenuItem>
      </MenuContainer>
    )
  }
}
