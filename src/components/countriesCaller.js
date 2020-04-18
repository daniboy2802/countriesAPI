import React, { Component } from 'react'
import fetch from 'node-fetch'
import ContainerFlags from './containerFlags'
import styles from '../styles/modules/countriesCaller.module.scss'
import { getAllCountries } from '../utilitys/helpers'

export default class CountrieCaller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      criterio: null,
    }
  }
  
  getTheCountries = () => {
    getAllCountries()
      .then(data => {
        this.setState({ data })
      })
  }

  render() {
    const { data, criterio } = this.state
    const realData = (criterio && data && criterio !== 'All') ? data.filter((c) => criterio === c.region) : data
    return(
      <div>
        <div className={styles.media}>
          <select className={styles.selector} onChange={(e) => this.setState({ criterio: e.target.value })}>
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
          <button className={styles.button} onClick={this.getTheCountries}>Presioname para llamar a los países</button>
        </div>
        <div>
          {data && (
            <ContainerFlags countries={realData}></ContainerFlags>
          )}
        </div>
        
      </div>
    )
  }
}


