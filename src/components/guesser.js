import React, { Component } from 'react'
import { getAllCountries } from '../utilitys/helpers'
import Answers from './answers'

export default class Guesser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: null,
      answers: [],
    }
  }
  
  getTheCountries = () => {
    getAllCountries()
      .then(countries => {
        countries = countries.filter(countrie => countrie.capital !== '')
        this.setState({ countries })
      })
  }

  renderByCritery = () => {
    const { countries, answers } = this.state
    const options = [1, 2, 3, 4]
    let correctAnswer = null

    if(answers.length === 0) {
      options.forEach(e => {
        answers.push(countries[Math.floor(Math.random() * countries.length)])
      })
    }

    correctAnswer = answers[Math.floor(Math.random() * answers.length)]
    return this.renderByFlag(answers, correctAnswer)
  }

  renderByFlag = (answers, correctAnswer) => {
    let { criterio } = this.props
    let response = []
    let filter = criterio === 'flag' ? 'name' : criterio === 'capital' ? 'name' : 'capital'
    answers.forEach(answer => response.push(answer[filter]))
    return (
      <div>
        <Answers 
          criterio={criterio}
          answers={response}
          correctAnswer={correctAnswer}
        >
        </Answers>
      </div>
    )
  }

  componentDidMount = () => this.getTheCountries()

  render() {
    const { countries } = this.state
    return (
      <div>
        <div>
        {countries &&(
          this.renderByCritery()
        )}
        </div>
        <div>
          <button onClick={()=> this.setState({ answers: [] })}>Siguiente</button>
        </div>
      </div>
    )
  }
}
