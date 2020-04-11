import React from 'react'
import styles from '../styles/modules/layout.module.scss'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className={styles.principalContainer}>
      <Header></Header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout