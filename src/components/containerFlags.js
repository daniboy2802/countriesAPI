import React, { Component } from 'react'
import Countrie from './countrie'
import styles from '../styles/modules/containerCountries.module.scss'

export default class ContainerFlags extends Component {
  render() {
    const { countries } = this.props
    return(
      <div >
        <container className={styles["container--countries"]}>
          {countries && (
            countries.map((countrie, key) => (
              <Countrie countrie={countrie}></Countrie>
            ))  
          )}
        </container>
      </div>
    )
  }
}