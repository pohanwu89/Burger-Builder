import React from 'react'
import styles from './Logo.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="Burger logo" />
    </div>
  )
}

export default Logo;