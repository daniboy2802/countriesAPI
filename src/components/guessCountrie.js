import React, { Component } from 'react'
import styles from '../styles/modules/guessCountrie.module.scss'
import Guesser from './guesser'

export default class GuessCountrie extends Component {
  constructor(props) {
    super(props) 
    this.criterios = ['flag', 'name', 'capital']
    this.regions = ['Todos', 'Africa', 'America', 'Asia', 'Europa', 'Oceania']
    this.state = {
      countries: null,
      criterio: this.criterios[0],
      region: this.regions[0],
      renderAnswers: false,
      isCorrect: null,
    }
  }

  changeCriterio = (e) => this.setState({ criterio: e.target.value })
  
  changeRegion = (e) => this.setState({ region: e.target.value })

  startGame = () => this.setState({ renderAnswers: true, isCorrect: null })
  
  render() {
    const { renderAnswers, isCorrect } = this.state
    return(
      <div>
        <div className={styles.direction}>
          <h1>Guess</h1>
          <select onChange={this.changeCriterio.bind(this)}>
            {this.criterios.map((criterio, key) => (
              <option key={key} value={criterio}>{criterio}</option>
            ))}
          </select>
          {/* <select onClick={this.changeRegion.bind(this)} >
            {this.regions.map((region, key) => (
              <option key={key} value={region}>{region}</option>
            ))}
          </select> */}
          <button onClick={this.startGame}>Start</button>
        </div>
        <div>
          {renderAnswers && (
            <Guesser 
              isCorrect={isCorrect}
              regions={this.regions}
              region={this.state.region}
              criterio={this.state.criterio}
            />          
          )}
        </div>
      </div>
    )
  }
}

