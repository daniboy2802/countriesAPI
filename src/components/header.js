import React from 'react'
import styles from '../styles/modules/header.module.scss'
import { getAllCountries } from './countriesCaller'

const Header = () => {
  return (
    <header className={styles['header']}>
      <container className={styles["container"]}>
        <ul>
          <li><a href="#">Daniel Santibáñez Valdivia</a></li>
        </ul>
      </container>
    </header>
  )
}

export default Header