import React, { Component } from 'react'
import styles from '../styles/modules/answers.module.scss'

export default class answers extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        active: null,
        isCorrect: null,
      }
  }

  componentWillReceiveProps() {
    this.setState({ isCorrect: null, active:null })
  }

  renderQuestion = () => {
    const { correctAnswer, criterio } = this.props
    if(criterio === 'flag') {
      return (
        <div className={styles.containerImg}>
          <img src={correctAnswer.flag}></img>
        </div>
      )
    } else if(criterio === 'name') {
      return (
        <div className={styles.containerImg}>
          <h2>Guees the capital of the next countrie:</h2>
          <h1>{correctAnswer.name}</h1>
        </div>
      )
    } else {
      return (
        <div className={styles.containerImg}>
          <h2>Guess the countrie name of the next capital city:</h2>
          <h1>{correctAnswer.capital}</h1>
        </div>
      )
    }
  }

  setActive = (e) => {
    this.setState({ 
      active: e.target.value 
    }, () => {
      this.setCorrectAnswerState()
    })
  }

  setCorrectAnswerState = () => {
    const { active } = this.state
    const { correctAnswer } = this.props
    correctAnswer.name === active ? this.setState({ isCorrect:true }) : this.setState({ isCorrect:false })
  }
  
  renderResponses = () => {
    const { answers } = this.props
    const { active, isCorrect } = this.state
    return (
      <div className={styles.answersContainer}>
        {answers.map((answer, key) => (
          <button 
            onClick={this.setActive.bind(this)} 
            value={answer}
            key={key}
            className={`${answer === active ? styles['buttonAnswer--active'] : styles['buttonAnswer--desactive']}`}
          >
            {answer}
          </button>
        ))}
        <h1>{`${isCorrect ? 'Tu respuesta es correcta' : isCorrect !== null ? 'Tu respuesta es incorrecta' : ''}`}</h1>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderQuestion()}
        {this.renderResponses()}
      </div>
    )
  }
}

