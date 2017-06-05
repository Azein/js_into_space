import React from 'react';
import styles from './App.css';
import Scene from './Scene';
import styled from 'styled-components'

import MainMenu from '../ui/MainMenu'
import universeImage from './universe.jpg'

const AppContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-clip: content-box;
  background-size: cover;
  background-image: url(${universeImage});
`;

export default class App extends React.Component {
  state = {
    gameStarted: false,
    canvasWidth: document.getElementById('root').offsetWidth,
    canvasHeight: document.getElementById('root').offsetHeight,
  }

  applyStartingParams = () => {
    this.setState({
      gameStarted: true,
      canvasWidth: document.getElementById('root').offsetWidth,
      canvasHeight: document.getElementById('root').offsetHeight,
    })
  }

  startGame = () => {
    setTimeout(
      this.applyStartingParams,
      1000
    )
  }

  render(){
    const { gameStarted, canvasWidth, canvasHeight } = this.state
    return (
      <AppContainer>
        {!gameStarted
          ? <MainMenu startGame={this.startGame}/>
          : <Scene width={canvasWidth} height={canvasHeight} />
        }
      </AppContainer>
    )
  }
}
