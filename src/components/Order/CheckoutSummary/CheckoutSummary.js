import React from 'react'
import Burger from '../../Burger/Burger'
import styles from './CheckoutSummary.module.css'
import Button from '../../UI/Button/Button'

const CheckoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it would taste well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        clicked={props.checkoutCancelled}
        btnType="Danger">
        Cancel
        </Button>
      <Button
        clicked={props.checkoutContinued}
        btnType="Success">
        Continue
        </Button>
    </div>
  )
}

export default CheckoutSummary