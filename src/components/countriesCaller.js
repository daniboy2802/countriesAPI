import React, { Component } from 'react'
import fetch from 'node-fetch'
import ContainerFlags from './containerFlags'
import styles from '../styles/modules/countriesCaller.module.scss'
import { getAllCountries } from '../utilitys/helpers'

export default class CountrieCaller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: null,
      criterio: null,
    }
  }
  
  getTheCountries = () => {
    getAllCountries()
      .then(countries => {
        this.setState({ countries })
      })
  }

  render() {
    const { countries, criterio } = this.state
    const countriesFilter = (criterio && countries && criterio !== 'All') ? countries.filter((c) => criterio === c.region) : countries
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
          {countries && (
            <ContainerFlags countries={countriesFilter}></ContainerFlags>
          )}
        </div>
      </div>
    )
  }
}


