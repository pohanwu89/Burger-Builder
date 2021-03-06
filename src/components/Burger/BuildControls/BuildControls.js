import React from 'react'

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
      {controls.map((control) => {
        return <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdd(control.type)}
          removed={() => props.ingredientRemove(control.type)}
          disabled={props.disabled[control.type]}
        />
      })}
      <button
        className={styles.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>
        {props.isAuth
          ? "ORDER NOW"
          : "Sign in to Order"
        }
      </button>
    </div>
  )
}

export default BuildControls
