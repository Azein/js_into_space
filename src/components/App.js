import React from 'react';
import styles from './App.css';
import Scene from './Scene';

export default class App extends React.Component {
  render(){
    const width = document.getElementById('root').offsetWidth; // canvas width
    const height = document.getElementById('root').offsetHeight;; // canvas height
    return(
      <Scene width={width} height={height} />
    )
  }
}
