import React, { Component } from 'react'
import styles from '../styles/modules/countrie.module.scss'

export default class Countrie extends Component {
  render() {
    const { countrie  } = this.props
    return(
      <div className={styles["countrie"]}>
        <div className={styles["extra--information"]}>
          <p className={styles["text"]}>{countrie.region}</p>
        </div>
        <div className={styles["img-container"]}>
          <img src={countrie.flag} alt="flag"></img> 
        </div>
        <div className={styles["textContainer"]}>
          <h3 className={styles["countrie-name"]}>{countrie.name}</h3>
          <p className={styles["countrie-capital"]}>{countrie.capital}</p>
        </div>
      </div>  
    )
  }
}