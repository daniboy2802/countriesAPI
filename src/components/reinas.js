import React, { Component } from 'react'
import styles from '../styles/modules/reinasContainer.module.scss'

export default class reinas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // matriz: this.createMatriz(8, this.createMatriz(8, null))
      matriz: [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
      ]
    }
  }

  createMatriz = (n, value) => {
    const x = new Array(n)
    x.fill(value)
    return x
  }

  showtheQueens = () => {
    const { matriz } = this.state
    let valores = []
    matriz.forEach((element, index) => {
      let posicionamientoAleatorio = null
      if(index == 0) {
        posicionamientoAleatorio = Math.floor(Math.random() * matriz.length)
        valores.push(posicionamientoAleatorio)
        element[posicionamientoAleatorio] = 'reina'
        console.log(valores)
      } else {
        let doit = false
        while (!doit) {
          posicionamientoAleatorio = Math.floor(Math.random() * matriz.length)
          valores.forEach(element2 => {
            if(posicionamientoAleatorio !== element2) {
              valores.push(posicionamientoAleatorio)
              element[posicionamientoAleatorio] = 'reina'
              console.log("hola")
              doit = true      
            }
          })  
        }
      }
    })
    this.setState({ matriz })
  }


  render() {
    const { matriz } = this.state
    return (
      <div>
        <button onClick={this.showtheQueens}>Show me</button>
        <div className={styles.reinasContainer}>
          {matriz && (
            matriz.map((element, index1) => (
              element.map((secondElement, index2)=> (
                <div className={styles.squarePlant}>{`${index1 + 1}, ${index2 + 1} ${secondElement}`}</div>
              ))
            ))
          )}
        </div>
      </div>
    )
  }
}

